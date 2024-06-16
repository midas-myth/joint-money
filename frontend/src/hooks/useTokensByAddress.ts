import { useMemo } from "react";
import { chunk, keyBy } from "lodash";
import { Address, erc20Abi } from "viem";
import { useAccount, useReadContracts } from "wagmi";

import { TokenInfo } from "./types";

export default function useTokensByAddress(
  tokenAddresses: Address[] | undefined,
): Record<Address, Partial<TokenInfo & { balance: bigint }>> | undefined {
  const { address } = useAccount();
  const tokensDetails = useReadContracts({
    contracts: tokenAddresses?.flatMap((tokenAddress) => [
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
    ]),
    allowFailure: true,
    query: {
      enabled: tokenAddresses && tokenAddresses.length > 0,
      refetchInterval: 2000,
    },
  });

  const tokenInfo:
    | Record<Address, Partial<TokenInfo & { balance: bigint }>>
    | undefined = useMemo(() => {
    if (!tokensDetails.data) {
      return undefined;
    }

    return keyBy(
      chunk(tokensDetails.data, 4).map((tokenDetails, index) => {
        let name: string | undefined = undefined;
        if (tokenDetails[0].status === "success") {
          name = tokenDetails[0].result as string;
        }

        let symbol: string | undefined = undefined;
        if (tokenDetails[1].status === "success") {
          symbol = tokenDetails[1].result as string;
        }

        let decimals: number | undefined = undefined;
        if (tokenDetails[2].status === "success") {
          decimals = tokenDetails[2].result as number;
        }

        let balance: bigint | undefined = undefined;
        if (tokenDetails[3].status === "success") {
          balance = tokenDetails[3].result as bigint;
        }

        const info = {
          address: tokenAddresses![index],
          decimals,
          name,
          symbol,
          balance,
        } satisfies Partial<TokenInfo & { balance: bigint }>;

        return info;
      }),
      (e) => e.address,
    );
  }, [tokensDetails.data, tokenAddresses]);

  return tokenInfo;
}
