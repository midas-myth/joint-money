import { useAccount } from "wagmi";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Page from "../components/Page";
import { useWriteJointMoneyErc20Accept } from "../generated";
import useInvites from "../hooks/useInvites";

export default function Invites() {
  const { address } = useAccount();
  const { data, isLoading, refetch } = useInvites();

  const { writeContractAsync, isPending } = useWriteJointMoneyErc20Accept();

  const handleAccept = async (groupId: string) => {
    await writeContractAsync({
      args: [BigInt(groupId)],
      account: address,
    });
    await refetch();
  };

  return (
    <Page>
      <Heading>Invites</Heading>
      <div>You are invited in the following groups:</div>
      {isLoading && <div>Loading...</div>}
      {data && data.invites.length === 0 && <div>No invites</div>}
      {data && data.invites.length !== 0 && (
        <div className="flex flex-col gap-2">
          {data.invites.map((invite) => (
            <div
              className="flex items-center justify-between p-2 border border-gray-300 rounded"
              key={invite.group.id}
            >
              <div>Title: {invite.group.id}</div>
              <Button
                onClick={() => handleAccept(invite.group.id)}
                disabled={isPending}
              >
                Accept
              </Button>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
}
