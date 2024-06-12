import { useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  useSimulateJointMoneyErc20Invite,
  useWriteJointMoneyErc20Invite,
} from "../../generated";

export default function InviteRow({ groupId }: { groupId: string }) {
  const { address } = useAccount();
  const [invite, setInvite] = useState("");
  const { data } = useSimulateJointMoneyErc20Invite({
    args: [BigInt(groupId), invite as Address],
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
  );
}
