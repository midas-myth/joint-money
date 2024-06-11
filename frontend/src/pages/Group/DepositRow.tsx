import { useMemo, useState } from "react";
import { Address, isAddress, maxUint256 } from "viem";
import { useAccount, useChainId } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import TokenSelector from "../../components/TokenSelector";
import {
  jointMoneyErc20Address,
  useReadIerc20Allowance,
  useSimulateJointMoneyErc20Deposit,
  useWriteIerc20Approve,
  useWriteJointMoneyErc20Deposit,
} from "../../generated";
import useTokenByAddress from "../../hooks/useTokenByAddress";

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

export default function DepositRow({ groupId }: { groupId: string }) {
  const chainId = useChainId();
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");

  const token = useTokenByAddress(tokenAddress);

  const allowance = useErc20TokenApproval(tokenAddress as Address);

  const amountBigInt = useMemo(() => {
    if (!token) {
      return undefined;
    }

    try {
      return BigInt(amount) * 10n ** BigInt(token.decimals);
    } catch {
      return undefined;
    }
  }, [amount, token]);

  const needApproval =
    !allowance || (amountBigInt !== undefined && amountBigInt > allowance);

  const { data, error } = useSimulateJointMoneyErc20Deposit({
    args: [BigInt(groupId), tokenAddress as Address, amountBigInt!],
    account: address,
    query: {
      enabled:
        amountBigInt !== undefined &&
        amountBigInt > 0n &&
        isAddress(tokenAddress),
    },
  });
  if (error) {
    console.dir(error);
  }

  const { writeContractAsync } = useWriteJointMoneyErc20Deposit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amountBigInt === undefined || amountBigInt <= 0n) {
      alert("Invalid amount");
      return;
    }

    if (!isAddress(tokenAddress)) {
      alert("Invalid token address");
      return;
    }

    if (!data) {
      alert("Invalid data");
      return;
    }

    await writeContractAsync(data.request);
    setAmount("");
  };

  const { writeContractAsync: approve } = useWriteIerc20Approve();

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAddress(tokenAddress)) {
      alert("Invalid token address");
      return;
    }

    await approve({
      args: [jointMoneyErc20Address[chainId], maxUint256],
      address: tokenAddress as Address,
    });
  };

  return (
    <form
      className="flex gap-1"
      onSubmit={needApproval ? handleApprove : handleSubmit}
    >
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <TokenSelector value={tokenAddress} onChange={setTokenAddress} />
      <Button type="submit">{needApproval ? "Approve" : "Deposit"}</Button>
    </form>
  );
}
