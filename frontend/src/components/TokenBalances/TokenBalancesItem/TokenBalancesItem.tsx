import { TOKEN_ICONS } from '@/constants/tokenIcons.constants'
import { formatBalance } from '../../../utils/formatBalance'

type Props = {
  token: string
  balance: string
}

export const TokenBalancesItem = ({ token, balance }: Props) => {
  const TokenIcon = TOKEN_ICONS[token]

  return (
    <div className="bg-token-balance-bg flex items-center justify-between rounded-lg p-4 pr-5 pl-5">
      <div className="flex items-center gap-4">
        {TokenIcon}
        <div className="text-xl font-bold text-white">{token}</div>
      </div>

      <div className="text-xl font-bold text-white">
        {formatBalance(balance)}
      </div>
    </div>
  )
}
