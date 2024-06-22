import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Page from "../components/Page";
import { useWriteJointMoneyErc20CreateGroup } from "../generated";

export default function GroupCreate() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteJointMoneyErc20CreateGroup();
  const navigate = useNavigate();

  const handleCreateGroup = async () => {
    await writeContractAsync({ args: [[]], account: address });
    navigate("/");
  };

  return (
    <Page>
      <Heading>Create group</Heading>
      <Button onClick={handleCreateGroup}>Create group</Button>
    </Page>
  );
}
