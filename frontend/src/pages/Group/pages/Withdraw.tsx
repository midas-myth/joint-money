import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Address, isAddress, isAddressEqual } from "viem";
import { useAccount } from "wagmi";

import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import InternalLink from "../../../components/InternalLink";
import Page from "../../../components/Page";
import TokenSelector from "../../../components/TokenSelector";
import displayMoney from "../../../displayMoney";
import {
  useSimulateJointMoneyErc20Withdraw,
  useWriteJointMoneyErc20Withdraw,
} from "../../../generated";
import useGroupBalance from "../../../hooks/useGroupBalance";
import useRecentTokenAddress from "../../../hooks/useRecentTokenAddress";
import useTokenApproval from "../../../hooks/useTokenApproval";
import useTokenByAddress from "../../../hooks/useTokenByAddress";

export default function Withdraw() {
  const groupId = useParams<"id">().id!;
  const { address } = useAccount();
  const [toAddress, setToAddress] = useState<string>("");
  const [amountText, setAmountText] = useState<string>("");
  const [recentTokenAddress, setRecentTokenAddress] = useRecentTokenAddress();
  const [tokenAddress, setTokenAddress] = useState<Address | undefined>(
    recentTokenAddress,
  );
  const tokenInfo = useTokenByAddress(
    tokenAddress && isAddress(tokenAddress) ? tokenAddress : undefined,
  );

  const groupBalance = useGroupBalance(groupId);
  const groupTokenBalance = useMemo(() => {
    const groupBalanceBigint =
      tokenAddress &&
      (groupBalance.data?.groupById?.tokenAmounts.find((tokenAmount) =>
        isAddressEqual(tokenAmount.tokenAddress as Address, tokenAddress),
      )?.amount as bigint | undefined);

    return displayMoney(groupBalanceBigint, tokenInfo?.decimals ?? 18, false);
  }, [
    groupBalance.data?.groupById?.tokenAmounts,
    tokenAddress,
    tokenInfo?.decimals,
  ]);

  const amountBigInt = useMemo(() => {
    if (!tokenInfo) {
      return undefined;
    }

    try {
      return BigInt(amountText) * 10n ** BigInt(tokenInfo.decimals ?? 18);
    } catch {
      return undefined;
    }
  }, [amountText, tokenInfo]);

  const { data: simulationData, error: simulationError } =
    useSimulateJointMoneyErc20Withdraw({
      args: [
        BigInt(groupId),
        tokenAddress as Address,
        amountBigInt!,
        toAddress as Address,
      ],
      account: address,
      query: {
        enabled:
          amountBigInt !== undefined &&
          amountBigInt > 0n &&
          tokenAddress !== undefined &&
          isAddress(tokenAddress) &&
          isAddress(toAddress),
      },
    });

  const { writeContractAsync, isSuccess } = useWriteJointMoneyErc20Withdraw();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecentTokenAddress(tokenAddress as Address);
    if (amountBigInt === undefined || amountBigInt <= 0n) {
      alert("Invalid amount");
      return;
    }

    if (!tokenAddress || !isAddress(tokenAddress)) {
      alert("Invalid token address");
      return;
    }

    if (!toAddress || !isAddress(toAddress)) {
      alert("Invalid to address");
      return;
    }

    if (!simulationData) {
      if (
        simulationError &&
        "cause" in simulationError &&
        "reason" in simulationError.cause
      ) {
        alert(simulationError.cause.reason);
        return;
      }
      alert("Invalid data");
      return;
    }

    await writeContractAsync(simulationData.request);
    setAmountText("");
  };

  const { needApproval, approve } = useTokenApproval(
    tokenAddress,
    amountBigInt,
  );

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();
    await approve();
  };

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <Heading>Withdraw from group {groupId}</Heading>
        <p>
          Group balance: {groupTokenBalance} {tokenInfo?.symbol}
        </p>
        <form
          className="flex flex-col items-stretch gap-1"
          onSubmit={needApproval ? handleApprove : handleSubmit}
        >
          <TokenSelector value={tokenAddress} onChange={setTokenAddress} />

          <Input
            type="number"
            value={amountText}
            onChange={(e) => setAmountText(e.target.value)}
            placeholder="Amount"
          />

          <Input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder="To"
          />

          <Button type="submit">{needApproval ? "Approve" : "Withdraw"}</Button>
        </form>
        {isSuccess && (
          <>
            <p>
              Successfully withdrawn {amountText} {tokenInfo?.symbol} from group{" "}
              {groupId} to
            </p>
            <InternalLink to={`/groups/${groupId}`}>Back to group</InternalLink>
          </>
        )}
      </div>
    </Page>
  );
}
