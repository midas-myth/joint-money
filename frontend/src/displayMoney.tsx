import { formatUnits, maxUint256 } from "viem";

export default function displayMoney(
  value: bigint | undefined,
  decimals: number,
  isLoading: boolean,
) {
  if (isLoading) {
    return "Loading...";
  }

  if (value === undefined) {
    return "N/A";
  }

  if (value === maxUint256) {
    return "∞ wei";
  }

  return formatUnits(value, decimals);
}
