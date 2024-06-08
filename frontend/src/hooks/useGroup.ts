import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createClient } from "graphql-ws";

const client = createClient({
  webSocketImpl: WebSocket,
  url: `ws://localhost:4350/graphql`,
});

const groupSubscripton = /* GraphQL */ `
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
    }
  }
`;

const subscriptionMap = new Map<
  string,
  {
    cleanup: () => void;
    count: number;
  }
>();

export default function useGroup(groupId?: string) {
  const queryClient = useQueryClient();

  const data = useQuery({
    queryKey: ["group", groupId],
    enabled: groupId !== undefined,
    staleTime: Infinity,
  });

  useEffect(() => {
    const hasSubscription = subscriptionMap.get(groupId!);

    if (!hasSubscription) {
      console.log(
        "Group did not have subscription, creating one",
        groupId!,
        subscriptionMap,
      );

      const cleanUp = client.subscribe(
        {
          query: groupSubscripton,
          variables: { id: groupId! },
        },
        {
          next(value) {
            queryClient.setQueriesData(
              {
                queryKey: ["group", groupId!],
              },
              value.data,
            );
          },
          error(error) {
            console.error(error);
          },
          complete() {
            queryClient.invalidateQueries({
              queryKey: ["group", groupId!],
            });
          },
        },
      );

      subscriptionMap.set(groupId!, {
        cleanup: cleanUp,
        count: 1,
      });

      console.log("Subscribed to group", groupId!, subscriptionMap);
    } else {
      subscriptionMap.set(groupId!, {
        cleanup: hasSubscription.cleanup,
        count: hasSubscription.count + 1,
      });
    }

    return () => {
      console.log("Cleaning up group subscription", groupId!);

      const hasSubscription = subscriptionMap.get(groupId!);

      if (hasSubscription) {
        if (hasSubscription.count === 1) {
          console.log("Unsubscribing from group", groupId!);

          hasSubscription.cleanup();
          subscriptionMap.delete(groupId!);
        } else {
          console.log("Decreasing count for group", groupId!);

          subscriptionMap.set(groupId!, {
            cleanup: hasSubscription.cleanup,
            count: hasSubscription.count - 1,
          });
        }
      }
    };
  }, [groupId, queryClient]);

  return data;
}
