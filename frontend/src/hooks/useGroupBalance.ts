import { graphql } from "../gql";
import useSubscription from "./useSubscription";

const groupBalanceSubscription = graphql(`
  subscription GetGroupBalance($id: String!) {
    groupById(id: $id) {
      tokenAmounts {
        tokenAddress
        amount
      }
    }
  }
`);

export default function useGroupBalance(groupId?: string) {
  const query = useSubscription(
    ["groupBalance", groupId],
    groupBalanceSubscription,
    { id: groupId },
    groupId !== undefined,
  );

  return query;
}
