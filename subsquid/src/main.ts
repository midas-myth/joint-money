import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";

import { Group, Invite, Member, TokenAmount } from "./model";

const hardhatUrl = "http://0.0.0.0:8545/";

const processor = new EvmBatchProcessor()
  .setRpcEndpoint(hardhatUrl)
  .setFinalityConfirmation(0)
  .addLog({
    address: ["0x5FbDB2315678afecb367f032d93F642f64180aa3"],
    topic0: [
      JointMoneyErc20Abi.events.GroupCreated.topic,
      JointMoneyErc20Abi.events.GroupAccepted.topic,
      JointMoneyErc20Abi.events.GroupDeposited.topic,
      JointMoneyErc20Abi.events.GroupInvited.topic,
      JointMoneyErc20Abi.events.GroupWithdrawn.topic,
    ],
  });

const db = new TypeormDatabase();

processor.run(db, async (ctx) => {
  const groupsCache = new Map<string, Group>();

  async function fetchGroup(id: string) {
    let group = groupsCache.get(id);

    if (!group) {
      group = await ctx.store.findOneByOrFail(Group, { id });
    }

    return group;
  }

  for (const block of ctx.blocks) {
    for (const log of block.logs) {
      if (JointMoneyErc20Abi.events.GroupCreated.is(log)) {
        const { id, admin } =
          JointMoneyErc20Abi.events.GroupCreated.decode(log);

        const group = new Group({ id: id.toString(), admin });

        await ctx.store.save(group);
        ctx.log.info(`Group created: ${group.id}`);
      } else if (JointMoneyErc20Abi.events.GroupAccepted.is(log)) {
        const { id, member } =
          JointMoneyErc20Abi.events.GroupAccepted.decode(log);

        const group = await fetchGroup(id.toString());

        group.members.push(new Member({ address: member }));
        await ctx.store.save(group);
        ctx.log.info(`Member added to group: ${group.id}`);
      } else if (JointMoneyErc20Abi.events.GroupDeposited.is(log)) {
        const { id, member, tokenAddress, amount } =
          JointMoneyErc20Abi.events.GroupDeposited.decode(log);

        const group = await fetchGroup(id.toString());

        const existingAmount = group.tokenAmounts.find(
          (ta) => ta.tokenAddress === tokenAddress
        );

        if (existingAmount !== undefined) {
          existingAmount.amount += amount;
        } else {
          group.tokenAmounts.push(new TokenAmount({ tokenAddress, amount }));
        }

        await ctx.store.save(group);
        ctx.log.info(`Deposited to group: ${group.id}`);
      } else if (JointMoneyErc20Abi.events.GroupInvited.is(log)) {
        const { id, invitee } =
          JointMoneyErc20Abi.events.GroupInvited.decode(log);

        const invite = new Invite({ groupId: id.toString(), invitee });

        await ctx.store.save(invite);
        ctx.log.info(`Invite created for group: ${invite.groupId}`);
      } else if (JointMoneyErc20Abi.events.GroupWithdrawn.is(log)) {
        const { id, member, token, amount } =
          JointMoneyErc20Abi.events.GroupWithdrawn.decode(log);

        const group = await fetchGroup(id.toString());

        const existingAmount = group.tokenAmounts.find(
          (ta) => ta.tokenAddress === token
        );

        if (existingAmount !== undefined) {
          existingAmount.amount -= amount;
        } else {
          group.tokenAmounts.push(
            new TokenAmount({ tokenAddress: token, amount: -amount })
          );
        }

        await ctx.store.save(group);
        ctx.log.info(`Withdrawn from group: ${group.id}`);
      }
    }
  }
});