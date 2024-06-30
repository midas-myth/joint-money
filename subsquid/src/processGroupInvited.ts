import { DataHandlerContext, Log } from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";
import intToRole from "./domain/intToRole";
import { Group, Invite } from "./model";

export default async function processGroupInvited(
  ctx: DataHandlerContext<Store, {}>,
  log: Log<{}>,
) {
  const { id, invites } = JointMoneyErc20Abi.events.GroupInvited.decode(log);

  const group = await ctx.store.findOneByOrFail(Group, { id: id.toString() });

  const inviteInstances = invites.map(
    (invite) =>
      new Invite({
        id: id + "-" + invite.invitee,
        group,
        invitee: invite.invitee,
        role: intToRole(invite.role),
      }),
  );

  group.invites ||= [];
  group.invites.push(...inviteInstances);

  await ctx.store.save(group);
  await ctx.store.save(inviteInstances);

  ctx.log.info(`Invites created for group: ${group.id}`);
}
