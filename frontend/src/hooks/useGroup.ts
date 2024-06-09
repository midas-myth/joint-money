import { graphql } from "../gql";
import useSubscription from "./useSubscription";

const groupSubscription = graphql(`
  subscription GetGroup($id: String!) {
    groupById(id: $id) {
      id
      admin
      members {
        address
        dailyAllowance
        dailySpent
        lastSpentAt
      }
      tokenAmounts {
        tokenAddress
        amount
      }
      invites {
        invitee
      }
    }
  }
`);

export default function useGroup(groupId?: string) {
  const query = useSubscription(
    ["group", groupId],
    groupSubscription,
    { id: groupId },
    groupId !== undefined,
  );

  return query;
}
