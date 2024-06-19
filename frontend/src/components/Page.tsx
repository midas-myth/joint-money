import { PropsWithChildren, useEffect, useMemo } from "react";
import { uniqBy } from "lodash";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { Link } from "react-router-dom";
import { avalancheFuji } from "viem/chains";
import {
  useAccount,
  useChainId,
  useChains,
  useConnect,
  useDisconnect,
  useWalletClient,
} from "wagmi";

import Button from "./Button";
import Heading from "./Heading";
import InternalLink from "./InternalLink";

function WalletOptions() {
  const { connect, connectors } = useConnect();
  const walletClientQuery = useWalletClient();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const chains = useChains();
  const currentChain = chains.find((c) => c.id === chainId);

  const uniqueConnectors = useMemo(
    () => uniqBy(connectors, (c) => c.type),
    [connectors],
  );

  useEffect(() => {
    if (walletClientQuery.data && accountChainId !== chainId) {
      walletClientQuery.data?.addChain({ chain: avalancheFuji });
    }
  }, [accountChainId, chainId, walletClientQuery.data]);

  return (
    <div className="flex flex-wrap items-center justify-end gap-1">
      {!isConnected &&
        uniqueConnectors.map((connector) => (
          <Button
            key={connector.id}
            onClick={() => connect({ connector, chainId: chainId })}
          >
            {connector.name}
          </Button>
        ))}

      {isConnected && (
        <>
          {currentChain?.name}
          <Jazzicon
            paperStyles={{ borderRadius: "0.25rem" }}
            diameter={32}
            seed={jsNumberForAddress(address!)}
          />
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </>
      )}
    </div>
  );
}

export default function Page(props: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-between min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <header className="flex justify-between pt-4">
          <Link to="/">
            <Heading>JM</Heading>
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
