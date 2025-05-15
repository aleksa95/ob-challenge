import { Alert } from '../Alert'

type Props = {
  balances: boolean | undefined
  isFetching: boolean
  isError: boolean
}

export const TokenBalances = ({ balances, isFetching, isError }: Props) => (
  <div className="flex flex-col gap-5">
    <div className="font-title text-2xl font-bold text-white">Balances</div>

    {isError && (
      <Alert type="error" message="Failed to load your token balances" />
    )}
    {isFetching && (
      <Alert type="loader" message="Loading your token balances" />
    )}

    {balances ? <div>Has balance</div> : <div>Empty state</div>}
  </div>
)
