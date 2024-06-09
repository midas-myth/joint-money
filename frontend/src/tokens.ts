enum ChainId {
  Hardhat = 31337,
}

const tokens: {
  [chainId: number]: {
    [symbol: string]: {
      address: string;
      name: string;
      decimals: number;
    };
  };
} = {
  [ChainId.Hardhat]: {
    MOCK: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      name: "Mock Erc20",
      decimals: 4,
    },
  },
};

export default tokens;
