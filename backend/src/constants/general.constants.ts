import { TokenConfig } from '../types/general.types.js'

export const NATIVE_TOKEN_SYMBOL = 'ETH'
export const NATIVE_TOKEN_DECIMALS = 18

export const TOKENS: TokenConfig[] = [
  {
    decimals: NATIVE_TOKEN_DECIMALS,
    symbol: NATIVE_TOKEN_SYMBOL,
    type: 'native',
  },
  {
    contractAddress: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    symbol: 'LINK',
    type: 'erc20',
  },
  {
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    symbol: 'USDC',
    type: 'erc20',
  },
]
