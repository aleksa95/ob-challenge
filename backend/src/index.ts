import express from 'express'
import { Address, createPublicClient, formatUnits, http, isAddress } from 'viem'
import { mainnet } from 'viem/chains'

import {
  NATIVE_TOKEN,
  NATIVE_TOKEN_DECIMALS,
} from './constants/general.constants.js'

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

    // Object to store token balances
    const balances: Record<string, string> = {}

    const nativeTokenBalance = await publicClient.getBalance({
      address: formattedAddress,
    })

    balances[NATIVE_TOKEN] = formatUnits(
      nativeTokenBalance,
      NATIVE_TOKEN_DECIMALS
    ).toString()

    res.json({
      balances,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
