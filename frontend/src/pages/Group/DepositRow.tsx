import InternalLink from "../../components/InternalLink";

export default function DepositRow({ groupId }: { groupId: string }) {
  return <InternalLink to={`/groups/${groupId}/deposit`}>Deposit</InternalLink>;
}
