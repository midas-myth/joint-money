import { Address, isAddressEqual } from "viem";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";

export default function AddressTag(props: { address: Address }) {
  const { address: currentAccountAddress } = useAccount();
  const { data: ensName } = useEnsName({ address: props.address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="inline-block max-w-full min-w-0 px-1 overflow-hidden border border-gray-300 rounded text-ellipsis">
      {ensName && ensAvatar && <img src={ensAvatar} alt={ensName} />}
      {currentAccountAddress &&
      isAddressEqual(currentAccountAddress, props.address)
        ? "You"
        : props.address}
    </div>
  );
}
