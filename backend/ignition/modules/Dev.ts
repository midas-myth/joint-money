import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Dev = buildModule("Dev", (m) => {
  const jointMoneyErc20 = m.contract("JointMoneyErc20", [], {});
  const mockErc20 = m.contract(
    "MockErc20",
    [
      "Mock Erc20",
      "MOCK",
      m.getAccount(0),
      100n * 10n ** 18n, // 100
    ],
    {}
  );

  return { jointMoneyErc20, mockErc20 };
});

export default Dev;
