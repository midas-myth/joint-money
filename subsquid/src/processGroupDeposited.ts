import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";
import { Group, Operation, OperationType, TokenAmount } from "./model";

export default async function processGroupDeposited(
  ctx: DataHandlerContext<Store, {}>,
  log: Log<{}>,
) {
  const { id, member, tokenAddress, amount } =
    JointMoneyErc20Abi.events.GroupDeposited.decode(log);

  const group = await ctx.store.findOneByOrFail(Group, { id: id.toString() });

  const existingAmount = group.tokenAmounts.find(
    (ta) => ta.tokenAddress === tokenAddress,
  );

  if (existingAmount !== undefined) {
    existingAmount.amount += amount;
  } else {
    group.tokenAmounts.push(new TokenAmount({ tokenAddress, amount }));
  }

  await ctx.store.save(group);

  const operation = new Operation({
    id: `${log.block.hash}-${log.transactionIndex}-${log.logIndex}`,
    type: OperationType.DEPOSIT,
    group,
    member,
    amount,
    tokenAddress,
  });

  await ctx.store.save(operation);
  ctx.log.info(`Deposited to group: ${group.id}`);
}
