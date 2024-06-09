import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JointMoneyErc20 = buildModule("JointMoneyErc20", (m) => {
  const jointMoneyErc20 = m.contract("JointMoneyErc20", [], {});

  m.call(jointMoneyErc20, "createGroup", [], {
    from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  });

  return { jointMoneyErc20 };
});

export default JointMoneyErc20;
