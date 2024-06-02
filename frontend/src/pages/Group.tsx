import { useParams } from "react-router-dom";

import {
  useSimulateJointMoneyDeposit,
  useSimulateJointMoneyInviteMembers,
  useWriteJointMoneyDeposit,
  useWriteJointMoneyInviteMembers,
  useWriteJointMoneyRemoveMember,
} from "../generated";

import { useMemo, useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../components/AddressTag";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Page from "../components/Page";
import useGroup from "../hooks/useGroup";

function convert(value: string, radix: number): bigint {
  const size = 10;
  const factor = BigInt(radix ** size);
  let i = value.length % size || size;
  const parts = [value.slice(0, i)];

  while (i < value.length) parts.push(value.slice(i, (i += size)));

  return parts.reduce((r, v) => r * factor + BigInt(parseInt(v, radix)), 0n);
}

export default function Group() {
  const { address } = useAccount();
  const groupIdRaw = useParams<"id">().id;

  const groupId = useMemo(
    () => (groupIdRaw === undefined ? undefined : convert(groupIdRaw, 36)),
    [groupIdRaw]
  );

  const { data: group, isLoading } = useGroup(groupId);

  const { isAdmin, isMember } = useMemo(() => {
    if (!group) {
      return { isAdmin: false, isMember: false };
    }

    return {
      isAdmin: group.members[0] === address,
      isMember: address && group.members.includes(address),
    };
  }, [address, group]);

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
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-col gap-1 p-2 border border-gray-300 rounded"
          key={group.id.toString(36)}
        >
          <div className="flex items-center gap-2">
            Title:
            <div className="max-w-full min-w-0 overflow-hidden text-ellipsis">
              {group.id.toString(36)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            Admin:
            <AddressTag address={group.admin} />
          </div>
          <div className="flex flex-col">
            Members:
            <div className="inline-flex flex-col flex-wrap items-start gap-1 overflow-hidden">
              {group.members.map((m) => (
                <Member
                  key={m}
                  groupId={group.id}
                  address={m}
                  adminAddress={group.admin}
                />
              ))}
            </div>
          </div>
          <div>
            Invites to:{" "}
            <div className="inline-flex flex-wrap gap-1">
              {group.invites.map((i) => (
                <AddressTag key={i} address={i} />
              ))}
            </div>
          </div>
          <div>Balance: {group.balance.toString()} wei</div>
        </div>
        {isMember && <DepositRow groupId={group.id} />}
        {isAdmin && <InviteRow groupId={group.id} />}
        {!isMember && !isAdmin && <div>Read only</div>}
      </div>
    </Page>
  );
}

function DepositRow(props: { groupId: bigint }) {
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
      />
      <Button type="submit">Deposit</Button>
    </form>
  );
}

function InviteRow(props: { groupId: bigint }) {
  const { address } = useAccount();
  const [invite, setInvite] = useState("");
  const { data } = useSimulateJointMoneyInviteMembers({
    args: [props.groupId, [invite as Address]],
    query: { enabled: isAddress(invite) },
    account: address,
  });

  const [errorString, setErrorString] = useState<string | undefined>(undefined);

  const { writeContractAsync } = useWriteJointMoneyInviteMembers();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAddress(invite)) {
      setErrorString("Invalid address");
      return;
    }

    if (!data) {
      alert("Invalid data");
      return;
    }

    await writeContractAsync(data.request);
  };

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <Input value={invite} onChange={(e) => setInvite(e.target.value)} />
        <Button>Invite</Button>
      </div>
      {errorString && <div className="text-red-500">{errorString}</div>}
    </form>
  );
}

function Member(props: {
  address: Address;
  groupId: bigint;
  adminAddress: Address;
}) {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteJointMoneyRemoveMember();

  const handleRemove = async () => {
    await writeContractAsync({
      args: [props.groupId, props.address],
      account: address,
    });
  };

  return (
    <div className="flex items-center gap-1">
      <AddressTag address={props.address} />
      {props.adminAddress !== props.address &&
        address === props.adminAddress && (
          <Button onClick={handleRemove}>X</Button>
        )}
    </div>
  );
}
