import { useState } from "react";
import { values } from "lodash";
import { Address, isAddress } from "viem";
import { useAccount, useChainId, useReadContracts } from "wagmi";

import displayMoney from "../displayMoney";
import { erc20Abi } from "../generated";
import tokens from "../tokens";
import Input from "./Input";

export default function TokenSelector(props: {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}) {
  const chainId = useChainId();
  const { address } = useAccount();
  const [isCustom, setIsCustom] = useState(false);
  const [text, setText] = useState<string>("");

  const balances = useReadContracts({
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

  const customTokenDetails = useReadContracts({
    contracts: [
      //  name
      {
        abi: erc20Abi,
        address: text as Address,
        functionName: "name",
        args: [],
      },
      //  symbol
      {
        abi: erc20Abi,
        address: text as Address,
        functionName: "symbol",
        args: [],
      },
      //  decimals
      {
        abi: erc20Abi,
        address: text as Address,
        functionName: "decimals",
        args: [],
      },
      // balanceOf
      {
        abi: erc20Abi,
        address: text as Address,
        functionName: "balanceOf",
        args: [address!],
      },
    ],
    allowFailure: true,
    query: {
      enabled: isAddress(text) && address && isAddress(address),
      refetchInterval: 1000,
    },
  });

  const customName = customTokenDetails.data?.[0]?.result;
  // const customSymbol = customTokenDetails.data?.[1]?.result;
  const customDecimals = customTokenDetails.data?.[2]?.result || 0;
  const customBalance = customTokenDetails.data?.[3]?.result;

  const formattedCustomBalance = displayMoney(
    customBalance,
    customDecimals,
    customTokenDetails.isLoading,
  );

  return (
    <div className="flex flex-col gap-1">
      {isCustom && (
        <Input
          placeholder="Token Address"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <select
        className="block w-full px-3 py-2 border border-gray-300 rounded"
        value={isCustom ? "custom" : props.value || ""}
        onChange={(e) => {
          if (e.target.value === "custom") {
            setIsCustom(true);
            return;
          }
          if (isCustom) {
            setIsCustom(false);
            setText("");
          }
          props.onChange(e.target.value);
        }}
      >
        <option value="">Select Token</option>
        <option value="custom">
          {customName || "Custom Token"} ({formattedCustomBalance})
        </option>
        {values(tokens[chainId]).map((token, index) => (
          <option key={token.address} value={token.address}>
            {token.name} (
            {displayMoney(
              balances.data?.[index]?.result as bigint | undefined,
              token.decimals,
              balances.isLoading,
            )}
            )
          </option>
        ))}
      </select>
    </div>
  );
}
