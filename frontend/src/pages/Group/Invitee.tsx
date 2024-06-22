import { Address } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../../components/AddressTag";
import Button from "../../components/Button";
import { useWriteJointMoneyErc20CancelInvitation } from "../../generated";

export default function Invitee(props: { groupId: string; address: Address }) {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteJointMoneyErc20CancelInvitation();

  const handleCancel = async () => {
    await writeContractAsync({
      args: [BigInt(props.groupId), props.address],
      account: address,
    });
  };

  return (
    <div className="flex items-center gap-1">
      <AddressTag address={props.address} />
      <Button onClick={handleCancel}>X</Button>
    </div>
  );
}
