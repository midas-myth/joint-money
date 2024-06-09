import { useMemo, useState } from "react";
import { isAddress } from "viem";
import { useAccount, useChainId } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import TokenSelector from "../../components/TokenSelector";
import { useWriteJointMoneyErc20Withdraw } from "../../generated";

export default function WithdrawRow({ groupId }: { groupId: string }) {
  const chainId = useChainId();
  const { address } = useAccount();
  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const amountBigInt = useMemo(() => {
    try {
      return BigInt(amount);
    } catch {
      return undefined;
    }
  }, [amount]);

  const { writeContractAsync } = useWriteJointMoneyErc20Withdraw();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amountBigInt === undefined || amountBigInt <= 0n) {
      alert("Invalid amount");
      return;
    }

    if (!isAddress(to)) {
      alert("Invalid address");
      return;
    }

    if (!isAddress(tokenAddress)) {
      alert("Invalid token address");
      return;
    }

    await writeContractAsync({
      args: [BigInt(groupId), tokenAddress, amountBigInt, to],
      account: address,
    });
    setAmount("");
    setTo("");
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
      <Input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Address"
      />

      <Button type="submit">Withdraw</Button>
    </form>
  );
}
