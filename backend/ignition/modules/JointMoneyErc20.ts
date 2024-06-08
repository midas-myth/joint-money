import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JointMoneyErc20 = buildModule("JointMoneyErc20", (m) => {
  const jointMoneyErc20 = m.contract("JointMoneyErc20", [], {});

  const call = m.call(jointMoneyErc20, "createGroup", [], {
    from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  });

  return { jointMoneyErc20 };
});

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

export default JointMoneyErc20;
