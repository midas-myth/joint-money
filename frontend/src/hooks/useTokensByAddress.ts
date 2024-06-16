import { useMemo } from "react";
import { entries } from "lodash";
import { useChainId } from "wagmi";

import tokens from "../tokens";
import { TokenInfo } from "./types";

export default function useTokensByAddress() {
  const chainId = useChainId();

  const tokensOnChain = tokens[chainId];

  const tokensByAddress = useMemo(() => {
    return entries(tokensOnChain).reduce(
      (acc, [symbol, token]) => {
        acc[token.address.toLowerCase()] = { ...token, symbol };
        return acc;
      },
      {} as Record<string, TokenInfo>,
    );
  }, [tokensOnChain]);

  return tokensByAddress;
}
