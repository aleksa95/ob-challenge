import { type Address, formatUnits, type PublicClient } from 'viem'

import type {
  GetTokenBalanceFromChainResponse,
  NativeTokenConfig,
} from '../types/general.types.js'

export const getNativeTokenBalance = async ({
  address,
  publicClient,
  tokenConfig,
}: {
  address: Address
  publicClient: PublicClient
  tokenConfig: NativeTokenConfig
}): Promise<GetTokenBalanceFromChainResponse> => {
  const nativeTokenBalance = await publicClient.getBalance({
    address,
  })

  return {
    balance: formatUnits(nativeTokenBalance, tokenConfig.decimals).toString(),
    symbol: tokenConfig.symbol,
  }
}
