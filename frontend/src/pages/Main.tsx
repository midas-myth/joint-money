import { useAccount } from "wagmi";

import AddressTag from "../components/AddressTag";
import InternalLink from "../components/InternalLink";
import Page from "../components/Page";
import useInvites from "../hooks/useInvites";
import useMyGroups from "../hooks/useMyGroups";

// import { useReadJointMoneyGetMyGroups } from "../generated";
// import useInvites from "../hooks/useInvites";

export default function Main() {
  const { address } = useAccount();

  const myInvitesQuery = useInvites();

  const myGroupsQuery = useMyGroups();

  return (
    <Page>
      {address && (
        <div className="flex">
          Address <AddressTag address={address} />
        </div>
      )}
      {myInvitesQuery.data && myInvitesQuery.data.invites.length !== 0 && (
        <div>
          You have {myInvitesQuery.data.invites.length} invites.{" "}
          <InternalLink to="/invites">View invites</InternalLink>.
        </div>
      )}
      <div>
        <div>Your groups</div>
        {!myGroupsQuery.data && <div>No data</div>}
        {myGroupsQuery.data && myGroupsQuery.data.memberships.length === 0 && (
          <>
            <div>No groups</div>
          </>
        )}
        {myGroupsQuery.data && myGroupsQuery.data.memberships.length !== 0 && (
          <div className="flex flex-col gap-2">
            {myGroupsQuery.data.memberships.map((membership) => (
              <div
                className="p-2 border border-gray-300 rounded "
                key={membership.group.id}
              >
                <div>Title: {membership.group.id}</div>
                <InternalLink to={`/groups/${membership.group.id}`}>
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
