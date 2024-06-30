import { assertNotNull, EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";

import * as JointMoneyErc20Abi from "./abi/JointMoneyErc20";
import { Group } from "./model";
import processGroupAccepted from "./processGroupAccepted";
import processGroupCreated from "./processGroupCreated";
import processGroupDeposited from "./processGroupDeposited";
import processGroupInvited from "./processGroupInvited";
import processGroupWithdrawn from "./processGroupWithdrawn";

const netName = process.env.NET_NAME || "hardhat";

let rpcEndpoint: string;
let startBlock: number | undefined;
let gateway: string | undefined;

if (netName === "fuji") {
  rpcEndpoint = assertNotNull(process.env.RPC_AVA_TESTNET_HTTP);
  startBlock = 34014456;
  gateway = "https://v2.archive.subsquid.io/network/avalanche-testnet";
} else if (netName === "hardhat") {
  rpcEndpoint = assertNotNull(process.env.RPC_HARDHAT_HTTP);
} else {
  throw new Error("Unknown netName: " + netName);
}

const processor = new EvmBatchProcessor()
  .setRpcEndpoint({
    url: rpcEndpoint,
    rateLimit: 10,
  })
  .setFinalityConfirmation(0)
  .addLog({
    address: [process.env.JOINT_MONEY_CONTRACT_ADDRESS!],
    topic0: [
      JointMoneyErc20Abi.events.GroupCreated.topic,
      JointMoneyErc20Abi.events.GroupAccepted.topic,
      JointMoneyErc20Abi.events.GroupDeposited.topic,
      JointMoneyErc20Abi.events.GroupInvited.topic,
      JointMoneyErc20Abi.events.GroupWithdrawn.topic,
    ],
  });

if (startBlock !== undefined) {
  processor.setBlockRange({
    from: startBlock,
  });
}

if (gateway !== undefined) {
  processor.setGateway(gateway);
}

const db = new TypeormDatabase();

processor.run(db, async (ctx) => {
  const groupsCache = new Map<string, Group>();

  for (const block of ctx.blocks) {
    for (const log of block.logs) {
      if (JointMoneyErc20Abi.events.GroupCreated.is(log)) {
        await processGroupCreated(ctx, log);
      } else if (JointMoneyErc20Abi.events.GroupAccepted.is(log)) {
        await processGroupAccepted(ctx, log);
      } else if (JointMoneyErc20Abi.events.GroupDeposited.is(log)) {
        await processGroupDeposited(ctx, log);
      } else if (JointMoneyErc20Abi.events.GroupInvited.is(log)) {
        await processGroupInvited(ctx, log);
      } else if (JointMoneyErc20Abi.events.GroupWithdrawn.is(log)) {
        await processGroupWithdrawn(ctx, log);
      }
    }
  }
});
