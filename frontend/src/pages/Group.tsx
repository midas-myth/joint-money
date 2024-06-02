import { useParams } from "react-router-dom";

import {
  useReadJointMoneyGetGroup,
  useWriteJointMoneyDeposit,
  useSimulateJointMoneyDeposit,
} from "../generated";

import AddressTag from "../components/AddressTag";
import Heading from "../components/Heading";
import Page from "../components/Page";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function convert(value: string, radix: number): bigint {
  // value: string
  const size = 10;
  const factor = BigInt(radix ** size);
  let i = value.length % size || size;
  const parts = [value.slice(0, i)];

  while (i < value.length) parts.push(value.slice(i, (i += size)));

  return parts.reduce((r, v) => r * factor + BigInt(parseInt(v, radix)), 0n);
}

export default function Group() {
  const groupIdRaw = useParams<"id">().id;

  const groupId = useMemo(
    () => (groupIdRaw === undefined ? undefined : convert(groupIdRaw, 36)),
    [groupIdRaw]
  );

  const { data: group, isLoading } = useReadJointMoneyGetGroup({
    args: [BigInt(groupId!)],
    query: { enabled: groupId !== undefined },
  });
  console.log({ groupId, groupIdRaw, group, isLoading });

  if (isLoading) {
    return (
      <Page>
        <Heading>Group</Heading>
        Loading...
      </Page>
    );
  }

  if (!group) {
    return (
      <Page>
        <Heading>Group</Heading>
        Group not found
      </Page>
    );
  }

  return (
    <Page>
      <Heading>Group</Heading>
      <div
        className="p-2 border border-gray-300 rounded"
        key={group.id.toString(36)}
      >
        <div>Title: {group.id.toString(36)}</div>
        <div>
          Members:{" "}
          {group.members.map((m) => (
            <AddressTag key={m} address={m} />
          ))}
        </div>
        <div>
          Invites to:{" "}
          {group.invites.map((i) => (
            <AddressTag key={i} address={i} />
          ))}
        </div>
        <div>Balance: {group.balance.toString()} wei</div>
      </div>
      <DepositRow groupId={group.id} />
    </Page>
  );
}

function DepositRow(props: { groupId: bigint }) {
  const [amount, setAmount] = useState<string>("");

  const amountBigInt = useMemo(() => {
    try {
      return BigInt(amount);
    } catch {
      return undefined;
    }
  }, [amount]);

  const { data, status } = useSimulateJointMoneyDeposit({
    args: [props.groupId],
    value: amountBigInt,
  });

  console.log("sim stat", status);

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
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button type="submit">Deposit</Button>
    </form>
  );
}
