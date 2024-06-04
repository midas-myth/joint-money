import { useMemo, useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { useWriteJointMoneyWithdraw } from "../../generated";

export default function WithdrawRow(props: { groupId: bigint }) {
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const amountBigInt = useMemo(() => {
    try {
      return BigInt(amount);
    } catch {
      return undefined;
    }
  }, [amount]);

  const { writeContractAsync } = useWriteJointMoneyWithdraw();

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

    await writeContractAsync({
      args: [props.groupId, amountBigInt, to as Address],
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
