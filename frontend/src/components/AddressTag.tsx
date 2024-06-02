import { Address } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";

export default function AddressTag(props: { address: Address }) {
  const { data: ensName } = useEnsName({ address: props.address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  console.log({ ensName, ensAvatar });

  return (
    <div className="inline-block px-1 border border-gray-300 rounded ">
      {ensName && ensAvatar && <img src={ensAvatar} alt={ensName} />}
      {props.address}
    </div>
  );
}
