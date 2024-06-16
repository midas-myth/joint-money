import { useMemo } from "react";
import { Address } from "viem";

import displayMoney from "../../displayMoney";
import { GetGroupSubscription } from "../../gql/graphql";
import useTokensByAddress from "../../hooks/useTokensByAddress";

export default function TokenBalances({
  group,
}: {
  group: GetGroupSubscription["groupById"];
}) {
  const tokenAddresses = useMemo(
    () => group?.tokenAmounts.map((ta) => ta.tokenAddress as Address),
    [group],
  );

  const chainTokens = useTokensByAddress(tokenAddresses);

  return (
    <div>
      Balances:
      <div>
        {group?.tokenAmounts.map((tokenAmount) => {
          const name =
            chainTokens?.[tokenAmount.tokenAddress as Address].name ??
            tokenAmount.tokenAddress;

          const formattedMoney = displayMoney(
            tokenAmount.amount,
            chainTokens?.[tokenAmount.tokenAddress as Address].decimals ?? 18,
            false,
          );

          const symbol =
            chainTokens?.[tokenAmount.tokenAddress as Address].symbol ?? "";

          return (
            <div
              key={tokenAmount.tokenAddress}
              className="flex items-center gap-2"
            >
              <div>{name}</div>
              <div>
                {formattedMoney} {symbol}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
