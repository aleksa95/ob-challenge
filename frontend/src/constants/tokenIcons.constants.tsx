import { JSX } from 'react'
import ETH from '@/assets/ETH.svg?react'
import LINK from '@/assets/LINK.svg?react'
import USDC from '@/assets/USDC.svg?react'

export const TOKEN_ICONS: Record<string, JSX.Element> = {
  ETH: <ETH />,
  LINK: <LINK />,
  USDC: <USDC />,
}
