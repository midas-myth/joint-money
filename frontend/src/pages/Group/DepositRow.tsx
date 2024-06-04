import { useMemo, useState } from "react";
import { useAccount } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  useSimulateJointMoneyDeposit,
  useWriteJointMoneyDeposit,
} from "../../generated";

export default function DepositRow(props: { groupId: bigint }) {
  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("");

  const amountBigInt = useMemo(() => {
    try {
      return BigInt(amount);
    } catch {
      return undefined;
    }
  }, [amount]);

  const { data } = useSimulateJointMoneyDeposit({
    args: [props.groupId],
    value: amountBigInt,
    account: address,
  });

  const { writeContractAsync } = useWriteJointMoneyDeposit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amountBigInt === undefined || amountBigInt <= 0n) {
      alert("Invalid amount");
      return;
    }

    if (!data) {
      alert("Invalid data");
      return;
    }

    await writeContractAsync(data.request);
    setAmount("");
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <Button type="submit">Deposit</Button>
    </form>
  );
}
