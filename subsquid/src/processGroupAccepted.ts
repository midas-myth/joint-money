import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import { ethers } from "ethers";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";
import { Group, Membership, Role } from "./model";

export default async function processGroupAccepted(
  ctx: DataHandlerContext<Store, {}>,
  log: Log<{}>,
) {
  const { id, member } = JointMoneyErc20Abi.events.GroupAccepted.decode(log);

  const group = await ctx.store.findOneByOrFail(Group, { id: id.toString() });
  const invite = group.invites.find((i) => i.invitee === member);

  if (invite === undefined) {
    console.error(`Invite not found for group: ${group.id}, member: ${member}`);
    return;
  }

  const newMember = new Membership({
    id: id + "-" + member,
    address: member,
    role: invite.role,
    dailyAllowance: 0n,
    group,
    dailySpent: 0n,
    lastSpentAt: 0n,
  });

  group.members ||= [];
  group.members.push(newMember);

  group.invites ||= [];
  group.invites = group.invites.filter((i) => i.invitee !== member);

  await ctx.store.save(group);
  await ctx.store.save(newMember);

  ctx.log.info(`Member added to group: ${group.id}`);
}
