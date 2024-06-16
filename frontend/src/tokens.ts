enum ChainId {
  Hardhat = 31337,
  AvalancheFuji = 43113,
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
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      name: "Mock Erc20",
      decimals: 18,
    },
  },
};

export default tokens;
