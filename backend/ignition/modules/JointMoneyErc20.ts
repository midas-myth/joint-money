import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JointMoneyErc20 = buildModule("JointMoneyErc20", (m) => {
  const jointMoneyErc20 = m.contract("JointMoneyErc20", [], {});

  return { jointMoneyErc20 };
});

export default JointMoneyErc20;
