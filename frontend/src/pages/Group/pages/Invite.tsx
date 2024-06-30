import { useState } from "react";
import { useParams } from "react-router-dom";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

import Button from "../../../components/Button";
import Crumbs from "../../../components/Crumbs";
import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import Page from "../../../components/Page";
import roleToInt from "../../../domain/roleToInt";
import {
  useSimulateJointMoneyErc20Invite,
  useWriteJointMoneyErc20Invite,
} from "../../../generated";
import { Role } from "../../../gql/graphql";

export default function Invite() {
  const { address } = useAccount();
  const groupId = useParams<"id">().id!;

  const [invite, setInvite] = useState("");
  const { data } = useSimulateJointMoneyErc20Invite({
    args: [
      BigInt(groupId),
      [
        {
          invitee: invite as Address,
          role: roleToInt(Role.Viewer),
        },
      ],
    ],
    query: { enabled: isAddress(invite) },
    account: address,
  });

  const [errorString, setErrorString] = useState<string | undefined>(undefined);

  const { writeContractAsync } = useWriteJointMoneyErc20Invite();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAddress(invite)) {
      setErrorString("Invalid address");
      return;
    }

    if (!data) {
      alert("Invalid data");
      return;
    }

    await writeContractAsync(data.request);
  };

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <div>
          <Crumbs
            crumbs={[
              {
                label: `Group ${groupId}`,
                to: `/groups/${groupId}`,
              },
            ]}
          />
          <Heading>Invite to group {groupId}</Heading>
        </div>

        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <div className="flex gap-1">
            <Input
              value={invite}
              onChange={(e) => setInvite(e.target.value)}
              placeholder="Address"
            />
            <Button>Invite</Button>
          </div>
          {errorString && <div className="text-red-500">{errorString}</div>}
        </form>
      </div>
    </Page>
  );
}
