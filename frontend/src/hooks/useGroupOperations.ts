import { useAccount } from "wagmi";

import { graphql } from "../gql";
import useSubscription from "./useSubscription";

const groupOperationsSubscription = graphql(`
  subscription GetGroupOperations($groupId: String!) {
    operations(where: { group: { id_eq: $groupId } }) {
      amount
      id
      member
      to
      tokenAddress
      type
    }
  }
`);

export default function useGroupOperations(groupId: string) {
  const { address } = useAccount();

  const query = useSubscription(
    ["group-operations", groupId],
    groupOperationsSubscription,
    {
      groupId,
    },
    address !== undefined,
  );

  return query;
}
