import { useCallback } from "react";
import { Address, isAddress, maxUint256 } from "viem";
import { useAccount, useChainId } from "wagmi";

import {
  jointMoneyErc20Address,
  useReadIerc20Allowance,
  useWriteIerc20Approve,
} from "../generated";
import useRecentTokenAddress from "./useRecentTokenAddress";

function useErc20TokenApproval(tokenAddress: Address) {
  const chainId = useChainId();
  const { address } = useAccount();

  const allowanceQuery = useReadIerc20Allowance({
    address: tokenAddress,
    account: address,
    args: [address!, jointMoneyErc20Address[chainId]],
    query: {
      enabled: isAddress(tokenAddress),
      refetchInterval: 1000,
    },
  });

  return allowanceQuery.data;
}

export default function useTokenApproval(
  tokenAddress: Address | undefined,
  amount: bigint = maxUint256,
) {
  const chainId = useChainId();
  const allowance = useErc20TokenApproval(tokenAddress as Address);
  const needApproval = allowance !== undefined && amount > allowance;
  const [, setRecentTokenAddress] = useRecentTokenAddress();

  const { writeContractAsync } = useWriteIerc20Approve();
  const approve = useCallback(async () => {
    if (!tokenAddress || !isAddress(tokenAddress)) {
      return;
    }

    setRecentTokenAddress(tokenAddress as Address);

    await writeContractAsync({
      args: [jointMoneyErc20Address[chainId], maxUint256],
      address: tokenAddress as Address,
    });
  }, [chainId, setRecentTokenAddress, tokenAddress, writeContractAsync]);

  return { needApproval, approve };
}
