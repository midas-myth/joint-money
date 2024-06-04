import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { maxUint256 } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../../components/AddressTag";
import Heading from "../../components/Heading";
import Page from "../../components/Page";
import useGroup from "../../hooks/useGroup";
import AllowanceRow from "./AllowanceRow";
import DeleteRow from "./DeleteRow";
import DepositRow from "./DepositRow";
import Invitee from "./Invitee";
import InviteRow from "./InviteRow";
import Member from "./Member";
import WithdrawRow from "./WithdrawRow";

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
    [groupIdRaw],
  );

  const {
    groupQuery: { data: group, isLoading: isGroupLoading },
    dailyAllowanceQuery: {
      data: dailyAllowance,
      isLoading: isDailyAllowanceLoading,
    },
  } = useGroup(groupId);

  const { isAdmin, isMember } = useMemo(() => {
    if (!group) {
      return { isAdmin: false, isMember: false };
    }

    return {
      isAdmin: group.members[0] === address,
      isMember: address && group.members.includes(address),
    };
  }, [address, group]);

  if (isGroupLoading) {
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
                <Invitee key={i} groupId={group.id} address={i} />
              ))}
            </div>
          </div>
          <div>Balance: {group.balance.toString()} wei</div>
          <div>
            Your daily allowance:{" "}
            {displayMoney(dailyAllowance, isDailyAllowanceLoading)}
            wei
          </div>
        </div>
        {isMember && <DepositRow groupId={group.id} />}
        {isAdmin && <InviteRow groupId={group.id} />}
        {isMember && <WithdrawRow groupId={group.id} />}
        {isAdmin && <AllowanceRow groupId={group.id} />}

        {isAdmin && <DeleteRow groupId={group.id} />}
        {!isMember && !isAdmin && <div>Read only</div>}
      </div>
    </Page>
  );
}

function displayMoney(value: bigint | undefined, isLoading: boolean) {
  if (isLoading) {
    return "Loading...";
  }

  if (value === undefined) {
    return "N/A";
  }

  if (value === maxUint256) {
    return "∞ wei";
  }

  return value.toString() + " wei";
}
