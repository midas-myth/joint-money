import { isAddress } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../components/AddressTag";
import InternalLink from "../components/InternalLink";
import Page from "../components/Page";
import { useReadJointMoneyGetMyGroups } from "../generated";
import useInvites from "../hooks/useInvites";

export default function Main() {
  const { address } = useAccount();

  const { data } = useReadJointMoneyGetMyGroups({
    query: { enabled: address && isAddress(address) },
    account: address,
  });

  const { data: invites } = useInvites();

  return (
    <Page>
      {address && (
        <div className="flex">
          Address <AddressTag address={address} />
        </div>
      )}
      {invites && invites.length !== 0 && (
        <div>
          You have {invites.length} invites.{" "}
          <InternalLink to="/invites">View invites</InternalLink>.
        </div>
      )}
      <div>
        <div>Your groups</div>
        {!data && <div>No data</div>}
        {data && data.length === 0 && (
          <>
            <div>No groups</div>
          </>
        )}
        {data && data.length !== 0 && (
          <div className="flex flex-col gap-2">
            {data.map((group) => (
              <div
                className="p-2 border border-gray-300 rounded "
                key={group.id.toString(36)}
              >
                <div>Title: {group.id.toString(36)}</div>
                <InternalLink to={`/groups/${group.id.toString(36)}`}>
                  Open
                </InternalLink>
              </div>
            ))}
          </div>
        )}
        <InternalLink to="/groups/create">Create a group</InternalLink>
      </div>
    </Page>
  );
}
