import { useMemo, useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount, useChainId } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import TokenSelector from "../../components/TokenSelector";
import {
  ierc20ErrorsAbi,
  jointMoneyErc20Address,
  useSimulateJointMoneyErc20Deposit,
  useWatchIerc20MetadataApprovalEvent,
  useWriteIerc20Approve,
  useWriteJointMoneyErc20Deposit,
} from "../../generated";

function useErc20TokenApproval(tokenAddress: Address) {
  const chainId = useChainId();
  const { address } = useAccount();

  // const { writeContractAsync } = useWriteIerc20Approve();

  const [approved, setApproved] = useState<boolean | null>(null);

  useWatchIerc20MetadataApprovalEvent({
    args: {
      owner: address,
      spender: jointMoneyErc20Address[chainId],
    },
    enabled: address && isAddress(address) && isAddress(tokenAddress),
    address: tokenAddress,
    fromBlock: 0n,
    onLogs: (log) => {
      // decodeEventLog(log);
      console.log("Approved", log);
    },
  });

  return { approved };
}

export default function DepositRow({ groupId }: { groupId: string }) {
  const chainId = useChainId();
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");

  const { approved } = useErc20TokenApproval(tokenAddress as Address);

  // const shouldApprove = useWatchIerc20MetadataApprovalEvent({
  //   args: {
  //     owner: address,
  //     spender: jointMoneyErc20Address[chainId],
  //   },
  //   fromBlock: 0n,
  //   onLogs: () => {
  //     console.log("Approved");
  //   },
  // });

  const amountBigInt = useMemo(() => {
    try {
      return BigInt(amount);
    } catch {
      return undefined;
    }
  }, [amount]);

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
      args: [jointMoneyErc20Address[chainId], amountBigInt!],
      address: tokenAddress as Address,
    });
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <TokenSelector value={tokenAddress} onChange={setTokenAddress} />
      <Button type="submit">Deposit</Button>
    </form>
  );
}
