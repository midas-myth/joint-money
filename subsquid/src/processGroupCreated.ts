import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import { ethers } from "ethers";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";
import { Group, Membership, Role } from "./model";

export default async function processGroupCreated(
  ctx: DataHandlerContext<Store, {}>,
  log: Log<{}>,
) {
  const { id, admin } = JointMoneyErc20Abi.events.GroupCreated.decode(log);

  const group = new Group({
    id: id.toString(),
    admin,
    members: [],
    invites: [],
    tokenAmounts: [],
  });

  const newMember = new Membership({
    id: id + "-" + admin,
    group,
    address: admin,
    role: Role.ADMIN,
    dailyAllowance: ethers.MaxUint256,
    dailySpent: 0n,
    lastSpentAt: 0n,
  });

  group.members.push(newMember);

  await ctx.store.save(group);
  await ctx.store.save(newMember);
  ctx.log.info(`Group created: ${group.id}`);
}
