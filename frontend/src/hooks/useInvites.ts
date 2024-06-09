import { useAccount } from "wagmi";

import { graphql } from "../gql";
import useSubscription from "./useSubscription";

const invitesSubscription = graphql(`
  subscription GetMyInvites($account: String!) {
    invites(where: { invitee_eq: $account }) {
      group {
        id
      }
    }
  }
`);

export default function useInvites() {
  const { address } = useAccount();

  const invitesQuery = useSubscription(
    ["invites", address],
    invitesSubscription,
    { account: address?.toLowerCase() },
    address !== undefined,
  );

  return invitesQuery;
}
