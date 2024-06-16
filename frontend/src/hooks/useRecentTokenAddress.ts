import { useMemo } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Address, isAddress } from "viem";

export default function useRecentTokenAddress() {
  const [recentTokenAddress, setRecentTokenAddress] = useLocalStorage<
    Address | undefined
  >("useRecentTokenAddress", undefined);

  const recentTokenAddressParsed = useMemo(
    () =>
      recentTokenAddress && isAddress(recentTokenAddress)
        ? recentTokenAddress
        : undefined,
    [recentTokenAddress],
  );

  return [recentTokenAddressParsed, setRecentTokenAddress] as const;
}
