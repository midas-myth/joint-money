import { PropsWithChildren } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import Button from "./Button";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import InternalLink from "./InternalLink";

function WalletOptions() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="flex items-center gap-1">
      {connectors.map((connector) => (
        <Button key={connector.id} onClick={() => connect({ connector })}>
          {connector.name}
        </Button>
      ))}
      {isConnected && ensAvatar && ensName && (
        <img src={ensAvatar} alt={ensName} />
      )}
      {isConnected && <Button onClick={() => disconnect()}>Disconnect</Button>}
    </div>
  );
}

export default function Page(props: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-between min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <header className="flex justify-between">
          <Link to="/">
            <Heading>Joint Account</Heading>
          </Link>
          <WalletOptions />
        </header>
        {props.children}
      </div>
      <footer>
        <InternalLink to="/aliases">Aliases</InternalLink>
      </footer>
    </div>
  );
}
