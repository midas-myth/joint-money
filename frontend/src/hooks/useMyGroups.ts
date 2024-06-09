import { useAccount } from "wagmi";

import { graphql } from "../gql";
import useSubscription from "./useSubscription";

const groupSubscription = graphql(`
  subscription GetMyGroups($address: String!) {
    memberships(where: { address_eq: $address }) {
      group {
        admin
        id
        members {
          address
          dailyAllowance
          dailySpent
          lastSpentAt
        }
        invites {
          invitee
        }
      }
    }
  }
`);

export default function useMyGroups() {
  const { address } = useAccount();

  const query = useSubscription(
    ["my-groups", address],
    groupSubscription,
    { address: address?.toLowerCase() },
    address !== undefined,
  );

  return query;
}
