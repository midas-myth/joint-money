import { Address } from "viem";
import { useAccount } from "wagmi";

import AddressTag from "../../components/AddressTag";
import Button from "../../components/Button";
import { useWriteJointMoneyErc20RemoveMember } from "../../generated";

export default function Member(props: {
  address: Address;
  groupId: string;
  adminAddress: Address;
}) {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteJointMoneyErc20RemoveMember();

  const handleRemove = async () => {
    await writeContractAsync({
      args: [BigInt(props.groupId), props.address],
      account: address,
    });
  };

  return (
    <div className="flex items-center gap-1">
      <AddressTag address={props.address} />
      {props.adminAddress !== props.address &&
        address === props.adminAddress && (
          <Button onClick={handleRemove}>X</Button>
        )}
    </div>
  );
}
