import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Address, isAddress, maxUint256 } from "viem";
import { useAccount, useChainId } from "wagmi";

import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import InternalLink from "../../../components/InternalLink";
import Page from "../../../components/Page";
import TokenSelector from "../../../components/TokenSelector";
import {
  jointMoneyErc20Address,
  useReadIerc20Allowance,
  useSimulateJointMoneyErc20Deposit,
  useWriteIerc20Approve,
  useWriteJointMoneyErc20Deposit,
} from "../../../generated";
import useTokenByAddress from "../../../hooks/useTokenByAddress";

function useErc20TokenApproval(tokenAddress: Address) {
  const chainId = useChainId();
  const { address } = useAccount();

  const allowanceQuery = useReadIerc20Allowance({
    address: tokenAddress,
    account: address,
    args: [address!, jointMoneyErc20Address[chainId]],
    query: {
      enabled: isAddress(tokenAddress),
      refetchInterval: 1000,
    },
  });

  return allowanceQuery.data;
}

export default function Deposit() {
  const chainId = useChainId();
  const groupId = useParams<"id">().id!;
  const { address } = useAccount();
  const [amountText, setAmountText] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string | undefined>(
    undefined,
  );

  const tokenInfo = useTokenByAddress(
    tokenAddress && isAddress(tokenAddress) ? tokenAddress : undefined,
  );

  console.log({ tokenInfo });

  const allowance = useErc20TokenApproval(tokenAddress as Address);

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

  const needApproval =
    !allowance || (amountBigInt !== undefined && amountBigInt > allowance);

  const { data: simulationData, error: simulationError } =
    useSimulateJointMoneyErc20Deposit({
      args: [BigInt(groupId), tokenAddress as Address, amountBigInt!],
      account: address,
      query: {
        enabled:
          amountBigInt !== undefined &&
          amountBigInt > 0n &&
          tokenAddress !== undefined &&
          isAddress(tokenAddress),
      },
    });

  const { writeContractAsync, isSuccess } = useWriteJointMoneyErc20Deposit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (amountBigInt === undefined || amountBigInt <= 0n) {
      alert("Invalid amount");
      return;
    }

    if (!tokenAddress || !isAddress(tokenAddress)) {
      alert("Invalid token address");
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

  const { writeContractAsync: approve } = useWriteIerc20Approve();

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tokenAddress || !isAddress(tokenAddress)) {
      alert("Invalid token address");
      return;
    }

    await approve({
      args: [jointMoneyErc20Address[chainId], maxUint256],
      address: tokenAddress as Address,
    });
  };

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <Heading>Deposit group {groupId}</Heading>
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

          <Button type="submit">{needApproval ? "Approve" : "Deposit"}</Button>
        </form>
        {isSuccess && (
          <>
            <p>
              Sucessfully deposited {amountText} {tokenInfo?.symbol} to group{" "}
              {groupId}
            </p>
            <InternalLink to={`/groups/${groupId}`}>Back to group</InternalLink>
          </>
        )}
      </div>
    </Page>
  );
}
