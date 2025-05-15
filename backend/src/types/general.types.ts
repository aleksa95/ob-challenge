import type { Address } from 'viem'

export interface Erc20TokenConfig {
  contractAddress: Address
  symbol: string
  type: 'erc20'
}

export interface GetTokenBalanceFromChainResponse {
  balance: string
  symbol: string
}

export interface NativeTokenConfig {
  decimals: number
  symbol: string
  type: 'native'
}

export type TokenConfig = Erc20TokenConfig | NativeTokenConfig
