import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Address, isAddressEqual } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../../components/AddressTag";
import Heading from "../../components/Heading";
import InternalLink from "../../components/InternalLink";
import Page from "../../components/Page";
import useGroup from "../../hooks/useGroup";
import AllowanceRow from "./AllowanceRow";
import Invitee from "./Invitee";
import InviteRow from "./InviteRow";
import Member from "./Member";
import TokenBalances from "./TokenBalances";

export default function Group() {
  const { address } = useAccount();
  const groupId = useParams<"id">().id;

  const groupQuery = useGroup(groupId);
  const group = groupQuery.data?.groupById;

  const { isAdmin, isMember } = useMemo(() => {
    if (!group) {
      return { isAdmin: false, isMember: false };
    }

    return {
      isAdmin: address && isAddressEqual(group.admin as Address, address),
      isMember:
        address &&
        !!group.members.find((m) =>
          isAddressEqual(m.address as Address, address),
        ),
    };
  }, [address, group]);

  if (groupQuery.isLoading) {
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
      <Heading>Group {groupId}</Heading>
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-col gap-1 p-2 border border-gray-300 rounded"
          key={group.id}
        >
          <div className="flex items-center gap-2">
            Title:
            <div className="max-w-full min-w-0 overflow-hidden text-ellipsis">
              {group.id}
            </div>
          </div>
          <div className="flex items-center gap-2">
            Admin:
            <AddressTag address={group.admin as Address} />
          </div>
          <div className="flex flex-col">
            Members:
            <div className="inline-flex flex-col flex-wrap items-start gap-1 overflow-hidden">
              {group.members.map((m) => (
                <Member
                  key={m.address}
                  groupId={group.id}
                  address={m.address as Address}
                  adminAddress={group.admin as Address}
                />
              ))}
            </div>
          </div>
          <div>
            Invites to:{" "}
            <div className="inline-flex flex-wrap gap-1">
              {group.invites.map((invite) => (
                <Invitee
                  key={invite.invitee}
                  groupId={group.id}
                  address={invite.invitee as Address}
                />
              ))}
              {/* {group.invites.map((i) => (
                <Invitee key={i} groupId={group.id} address={i} />
              ))} */}
            </div>
          </div>
          {/* {Balances(group)} */}
          <TokenBalances group={group} />
          {/* <div>
            Your daily allowance:{" "}
            {displayMoney(dailyAllowance, isDailyAllowanceLoading)}
            wei
          </div> */}
        </div>
        {isMember && (
          <InternalLink to={`/groups/${groupId}/deposit`}>Deposit</InternalLink>
        )}
        {isAdmin && <InviteRow groupId={group.id} />}
        {isMember && (
          <InternalLink to={`/groups/${groupId}/withdraw`}>
            Withdraw
          </InternalLink>
        )}
        {isAdmin && <AllowanceRow groupId={group.id} />}

        {/* {isAdmin && <DeleteRow groupId={group.id} />} */}
        {!isMember && !isAdmin && <div>Read only</div>}
      </div>
    </Page>
  );
}
