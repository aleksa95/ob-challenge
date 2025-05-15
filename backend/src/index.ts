import express from 'express'
import { type Address, createPublicClient, http, isAddress } from 'viem'
import { mainnet } from 'viem/chains'

import type { GetTokenBalanceFromChainResponse } from './types/general.types.js'

import { TOKENS } from './constants/general.constants.js'
import { getErc20TokenBalance } from './services/getErc20TokenBalance.js'
import { getNativeTokenBalance } from './services/getNativeTokenBalance.js'

const app = express()
const port = '3000'

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})

app.get('/api/balance/:address', async (req, res) => {
  const { address } = req.params

  if (!isAddress(address)) {
    res.status(400).json({ error: 'Invalid Ethereum address' })
  }

  try {
    const formattedAddress = address as Address

    const promises: Promise<GetTokenBalanceFromChainResponse>[] = TOKENS.map(
      (tokenConfig) => {
        if (tokenConfig.type === 'native') {
          return getNativeTokenBalance({
            address: formattedAddress,
            publicClient,
            tokenConfig,
          })
        }

        return getErc20TokenBalance({
          address: formattedAddress,
          publicClient,
          tokenConfig,
        })
      }
    )

    const settledPromises = await Promise.allSettled(promises)

    const balances: Record<string, string> = settledPromises.reduce(
      (acc, result) => {
        if (result.status === 'fulfilled') {
          return {
            ...acc,
            [result.value.symbol]: result.value.balance,
          }
        }

        return acc
      },
      {}
    )

    res.json(balances)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
