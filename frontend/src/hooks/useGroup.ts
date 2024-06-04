import { useThrottle } from "@uidotdev/usehooks";
import { DecodeErrorResultReturnType } from "viem";
import { useAccount } from "wagmi";

import {
  jointMoneyAbi,
  useReadJointMoneyGetGroup,
  useWatchJointMoneyDepositEvent,
  useWatchJointMoneyInvitationCancelledEvent,
  useWatchJointMoneyMemberAcceptedEvent,
  useWatchJointMoneyMemberRemovedEvent,
  useWatchJointMoneyMembersInvitedEvent,
  useWatchJointMoneyWithdrawEvent,
} from "../generated";

export default function useGroup(groupId?: bigint) {
  const { address } = useAccount();

  const groupQuery = useReadJointMoneyGetGroup({
    args: [groupId!],
    query: {
      enabled: groupId !== undefined,
      retry(failureCount, error) {
        if (error.cause && "data" in error.cause) {
          const e = error.cause.data as DecodeErrorResultReturnType<
            typeof jointMoneyAbi,
            "GroupNotFound"
          >;

          if (e.errorName === "GroupNotFound") {
            return false;
          }
        }

        return failureCount < 3;
      },
    },
    account: address,
  });

  const throttledRefetch = useThrottle(
    () => groupQuery.refetch,
    1000,
  ) as unknown as typeof groupQuery.refetch;

  useWatchJointMoneyDepositEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: async () => {
      console.log("Deposit event");

      throttledRefetch();
    },
  });

  useWatchJointMoneyWithdrawEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: () => {
      console.log("Withdraw event");

      throttledRefetch();
    },
  });

  useWatchJointMoneyMemberAcceptedEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: () => {
      console.log("Member accepted event");

      throttledRefetch();
    },
  });

  useWatchJointMoneyMemberRemovedEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: () => {
      console.log("Member removed event");

      throttledRefetch();
    },
  });

  useWatchJointMoneyMembersInvitedEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: () => {
      console.log("Members invited event");

      throttledRefetch();
    },
  });

  useWatchJointMoneyInvitationCancelledEvent({
    args: {
      id: groupId!,
    },
    enabled: groupId !== undefined,
    onLogs: () => {
      console.log("Invitation cancelled event");

      throttledRefetch();
    },
  });

  return groupQuery;
}
