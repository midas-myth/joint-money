import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

import Button from "../../components/Button";
import { useWriteJointMoneyDeleteGroup } from "../../generated";

export default function DeleteRow({ groupId }: { groupId: bigint }) {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteJointMoneyDeleteGroup();
  const navigate = useNavigate();

  const handleDeleteGroup = async () => {
    await writeContractAsync({ args: [groupId], account: address });
    navigate("/");
  };

  return (
    <div className="flex gap-2">
      <Button className="bg-red-500" onClick={handleDeleteGroup}>
        Delete group
      </Button>
    </div>
  );
}
