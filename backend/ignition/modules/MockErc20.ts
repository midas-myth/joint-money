import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockErc20 = buildModule("MockErc20", (m) => {
  const mockErc20 = m.contract(
    "MockErc20",
    [
      "Mock Erc20",
      "MOCK",
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      1000000, // 100
    ],
    {}
  );

  return { mockErc20 };
});

export default MockErc20;
