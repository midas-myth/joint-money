import { useEffect, useState } from "react";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { isEqual } from "lodash";

// import type {s} from "../gql/graphql";

import { TypedDocumentString } from "../gql/graphql";
import graphqlClient from "./graphqlClient";

const subscriptionMap = new Map<
  string,
  {
    cleanup: () => void;
    count: number;
  }
>();

export default function useSubscription<TResult, TVariables>(
  key: (string | undefined)[],
  query: TypedDocumentString<TResult, TVariables>,
  variables: Record<string, string | number | boolean | undefined | null>,
  enabled: boolean,
): UseQueryResult<TResult, Error> {
  const queryClient = useQueryClient();

  const queryObj = useQuery({
    queryKey: [key, variables],
    enabled: enabled,
    staleTime: Infinity,
  });

  const [stableKey, setStableKey] = useState(key);
  const [stableVariables, setStableVariables] = useState(variables);

  useEffect(() => {
    if (!isEqual(stableKey, key)) {
      setStableKey(key);
    }
  }, [key, stableKey]);

  useEffect(() => {
    if (!isEqual(stableVariables, variables)) {
      setStableVariables(variables);
    }
  }, [variables, stableVariables]);

  useEffect(() => {
    const hasSubscription = subscriptionMap.get(stableKey.join("@"));

    if (!hasSubscription) {
      console.log(
        "Group did not have subscription, creating one",
        stableKey!,
        subscriptionMap,
      );

      const cleanUp = graphqlClient.subscribe(
        {
          query: query.toString(),
          variables: stableVariables,
        },
        {
          next(value) {
            queryClient.setQueriesData(
              {
                queryKey: [stableKey, stableVariables],
              },
              value.data,
            );
          },
          error(error) {
            console.error(error);
          },
          complete() {
            queryClient.invalidateQueries({
              queryKey: [stableKey, stableVariables],
            });
          },
        },
      );

      subscriptionMap.set(stableKey.join("@"), {
        cleanup: cleanUp,
        count: 1,
      });

      console.log("Subscribed to group", stableKey, subscriptionMap);
    } else {
      subscriptionMap.set(stableKey.join("@"), {
        cleanup: hasSubscription.cleanup,
        count: hasSubscription.count + 1,
      });
    }

    return () => {
      console.log("Cleaning up group subscription", stableKey);

      const hasSubscription = subscriptionMap.get(stableKey.join("@"));

      if (hasSubscription) {
        if (hasSubscription.count === 1) {
          console.log("Unsubscribing from group", stableKey);

          hasSubscription.cleanup();
          subscriptionMap.delete(stableKey.join("@"));
        } else {
          console.log("Decreasing count for group", stableKey);

          subscriptionMap.set(stableKey.join("@"), {
            cleanup: hasSubscription.cleanup,
            count: hasSubscription.count - 1,
          });
        }
      }
    };
  }, [query, queryClient, stableKey, stableVariables]);

  return queryObj as any;
}
