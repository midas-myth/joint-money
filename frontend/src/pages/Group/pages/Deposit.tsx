import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Address, isAddress, parseUnits } from "viem";
import { useAccount } from "wagmi";

import Button from "../../../components/Button";
import Crumbs from "../../../components/Crumbs";
import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import InternalLink from "../../../components/InternalLink";
import Page from "../../../components/Page";
import TokenSelector from "../../../components/TokenSelector";
import {
  useSimulateJointMoneyErc20Deposit,
  useWriteJointMoneyErc20Deposit,
} from "../../../generated";
import useRecentTokenAddress from "../../../hooks/useRecentTokenAddress";
import useTokenApproval from "../../../hooks/useTokenApproval";
import useTokenByAddress from "../../../hooks/useTokenByAddress";

export default function Deposit() {
  const groupId = useParams<"id">().id!;
  const { address } = useAccount();
  const [amountText, setAmountText] = useState<string>("");
  const [recentTokenAddress, setRecentTokenAddress] = useRecentTokenAddress();
  const [tokenAddress, setTokenAddress] = useState<Address | undefined>(
    recentTokenAddress,
  );

  const tokenInfo = useTokenByAddress(
    tokenAddress && isAddress(tokenAddress) ? tokenAddress : undefined,
  );

  const amountBigInt = useMemo(() => {
    if (!tokenInfo) {
      return undefined;
    }

    try {
      return parseUnits(amountText, tokenInfo.decimals ?? 18);
    } catch {
      return undefined;
    }
  }, [amountText, tokenInfo]);

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
    setRecentTokenAddress(tokenAddress as Address);
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
        <div>
          <Crumbs
            crumbs={[
              {
                label: `Group ${groupId}`,
                to: `/groups/${groupId}`,
              },
            ]}
          />
          <Heading>Deposit group {groupId}</Heading>
        </div>
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
              Successfully deposited {amountText} {tokenInfo?.symbol} to group{" "}
              {groupId}
            </p>
            <InternalLink to={`/groups/${groupId}`}>Back to group</InternalLink>
          </>
        )}
      </div>
    </Page>
  );
}
