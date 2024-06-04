import { useAccount } from "wagmi";

import { useReadJointMoneyGetMyInvites } from "../generated";

export default function useInvites() {
  const { address } = useAccount();
  const invitesQuery = useReadJointMoneyGetMyInvites({
    account: address,
  });

  return invitesQuery;
}
