import Button from "../components/Button";
import Heading from "../components/Heading";
import Page from "../components/Page";

import { useWriteJointMoneyCreateGroup } from "../generated";

export default function GroupCreate() {
  const { data, writeContractAsync } = useWriteJointMoneyCreateGroup();

  const handleCreateGroup = async () => {
    const res = await writeContractAsync({ args: [[]] });
    console.log(res);
  };

  console.log({ data });

  return (
    <Page>
      <Heading>Create group</Heading>
      <Button onClick={handleCreateGroup}>Create group</Button>
    </Page>
  );
}
