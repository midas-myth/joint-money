import { useMemo, useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  useSimulateJointMoneySetAllowance,
  useWriteJointMoneySetAllowance,
} from "../../generated";

export default function AllowanceRow(props: { groupId: string }) {
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

  const { data } = useSimulateJointMoneySetAllowance({
    args: [BigInt(props.groupId), to as Address, amountBigInt!],
    query: {
      enabled: amountBigInt !== undefined && amountBigInt > 0n && isAddress(to),
    },
    account: address,
  });

  const { writeContractAsync } = useWriteJointMoneySetAllowance();

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

    if (!data) {
      alert("Invalid data");
      return;
    }

    await writeContractAsync(data.request);
    setAmount("");
    setTo("");
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Address"
      />
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <Button type="submit">Set allowance</Button>
    </form>
  );
}
