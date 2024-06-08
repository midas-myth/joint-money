import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JointMoney = buildModule("JointMoney", (m) => {
  const jointMoney = m.contract("JointMoney", [], {});

  return { jointMoney };
});

export default JointMoney;
