import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Page from "../components/Page";

import { useWriteJointMoneyCreateGroup } from "../generated";

export default function GroupCreate() {
  const { writeContractAsync } = useWriteJointMoneyCreateGroup();
  const navigate = useNavigate();

  const handleCreateGroup = async () => {
    await writeContractAsync({ args: [[]] });
    navigate("/");
  };

  return (
    <Page>
      <Heading>Create group</Heading>
      <Button onClick={handleCreateGroup}>Create group</Button>
    </Page>
  );
}
