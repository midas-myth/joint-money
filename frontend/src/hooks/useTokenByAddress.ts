import useTokensByAddress from "./useTokensByAddress";

export default function useTokenByAddress(tokenAddress: string | undefined) {
  const tokensByAddress = useTokensByAddress();

  if (!tokenAddress) {
    return undefined;
  }

  return tokensByAddress[tokenAddress.toLowerCase()];
}
