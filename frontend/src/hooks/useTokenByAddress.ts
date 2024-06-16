import { useMemo } from "react";
import { Address, erc20Abi, isAddress } from "viem";
import { useAccount, useReadContracts } from "wagmi";

import { TokenInfo } from "./types";

export default function useTokenByAddress(
  tokenAddress: Address | undefined,
): Partial<TokenInfo & { balance: bigint }> | undefined {
  const { address } = useAccount();
  const customTokenDetails = useReadContracts({
    contracts: [
      //  name
      {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "name",
        args: [],
      },
      //  symbol
      {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "symbol",
        args: [],
      },
      //  decimals
      {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "decimals",
        args: [],
      },
      // balanceOf
      {
        abi: erc20Abi,
        address: tokenAddress,
        functionName: "balanceOf",
        args: [address!],
      },
    ],
    allowFailure: true,
    query: {
      enabled:
        tokenAddress &&
        address &&
        isAddress(tokenAddress) &&
        isAddress(address),
      refetchInterval: 1000,
    },
  });

  const tokenInfo: Partial<TokenInfo & { balance: bigint }> | undefined =
    useMemo(() => {
      if (!customTokenDetails.data) {
        return undefined;
      }

      let name: string | undefined = undefined;
      if (customTokenDetails.data[0].status === "success") {
        name = customTokenDetails.data[0].result;
      }

      let symbol: string | undefined = undefined;
      if (customTokenDetails.data[1].status === "success") {
        symbol = customTokenDetails.data[1].result;
      }

      let decimals: number | undefined = undefined;
      if (customTokenDetails.data[2].status === "success") {
        decimals = customTokenDetails.data[2].result;
      }

      let balance: bigint | undefined = undefined;
      if (customTokenDetails.data[3].status === "success") {
        balance = customTokenDetails.data[3].result;
      }

      return {
        address: tokenAddress,
        decimals,
        name,
        symbol,
        balance,
      } satisfies Partial<TokenInfo & { balance: bigint }>;
    }, [customTokenDetails.data, tokenAddress]);

  return tokenInfo;
}
