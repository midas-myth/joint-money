import { values } from "lodash";
import { Address } from "viem";
import { useAccount, useChainId, useReadContracts } from "wagmi";

import displayMoney from "../displayMoney";
import { erc20Abi } from "../generated";
import tokens from "../tokens";

export default function TokenSelector(props: {
  value: string;
  onChange: (value: string) => void;
}) {
  const chainId = useChainId();
  const { address } = useAccount();

  const result = useReadContracts({
    contracts: values(tokens[chainId]).map((token) => ({
      abi: erc20Abi,
      address: token.address as Address,
      functionName: "balanceOf",
      args: [address],
    })),
    allowFailure: true,
    query: {
      refetchInterval: 1000,
    },
  });

  return (
    <select
      className="block px-3 py-2 border border-gray-300 rounded"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option value="">Select Token</option>
      {values(tokens[chainId]).map((token, index) => (
        <option key={token.address} value={token.address}>
          {token.name} (
          {displayMoney(
            result.data?.[index]?.result as bigint | undefined,
            token.decimals,
            result.isLoading,
          )}
          )
        </option>
      ))}
    </select>
  );
}
