import { type Address, formatUnits, type PublicClient } from 'viem'

import type {
  Erc20TokenConfig,
  GetTokenBalanceFromChainResponse,
} from '../types/general.types.js'

import { ERC_20_ABI } from '../abis/erc20.abi.js'

export const getErc20TokenBalance = async ({
  address,
  publicClient,
  tokenConfig,
}: {
  address: Address
  publicClient: PublicClient
  tokenConfig: Erc20TokenConfig
}): Promise<GetTokenBalanceFromChainResponse> => {
  const tokenDecimals = await publicClient.readContract({
    abi: ERC_20_ABI,
    address: tokenConfig.contractAddress,
    functionName: 'decimals',
  })

  const tokenBalance = await publicClient.readContract({
    abi: ERC_20_ABI,
    address: tokenConfig.contractAddress,
    args: [address],
    functionName: 'balanceOf',
  })

  return {
    balance: formatUnits(tokenBalance, tokenDecimals).toString(),
    symbol: tokenConfig.symbol,
  }
}
