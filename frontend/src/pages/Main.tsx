import { useAccount } from "wagmi";

import Page from "../components/Page";

import InternalLink from "../components/InternalLink";
import { useReadJointMoneyGetMyGroups } from "../generated";
import AddressTag from "../components/AddressTag";

export default function Main() {
  const { address } = useAccount();

  const { data, error, status } = useReadJointMoneyGetMyGroups();

  console.log({ data, error, status });

  return (
    <Page>
      <div>Address {address}</div>
      <div>
        <div>Your groups</div>
        {!data && <div>No data</div>}
        {data && data.length === 0 && (
          <>
            <div>No groups</div>
          </>
        )}

        {data && data.length !== 0 && (
          <div className="flex flex-col">
            {data.map((group) => (
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
              </div>
            ))}
          </div>
        )}
        <InternalLink to="/group/create">Create a group</InternalLink>
      </div>
    </Page>
  );
}
