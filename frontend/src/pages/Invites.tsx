import { useAccount } from "wagmi";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Page from "../components/Page";
import { useWriteJointMoneyAcceptGroupInvitation } from "../generated";
import useInvites from "../hooks/useInvites";

export default function Invites() {
  const { address } = useAccount();
  const { data, isLoading, refetch } = useInvites();

  const { writeContractAsync, isPending } =
    useWriteJointMoneyAcceptGroupInvitation();

  const handleAccept = async (groupId: bigint) => {
    await writeContractAsync({
      args: [groupId],
      account: address,
    });
    await refetch();
  };

  return (
    <Page>
      <Heading>Invites</Heading>
      <div>You are invited in the following groups:</div>
      {isLoading && <div>Loading...</div>}
      {data && data.length === 0 && <div>No invites</div>}
      {data && data.length !== 0 && (
        <div className="flex flex-col gap-2">
          {data.map((id) => (
            <div
              className="flex items-center justify-between p-2 border border-gray-300 rounded"
              key={id.toString(36)}
            >
              <div>Title: {id.toString(36)}</div>
              <Button onClick={() => handleAccept(id)} disabled={isPending}>
                Accept
              </Button>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
}
