import { GetTokenBalancesResponse } from '@/apis/types/general.api.types'
import { Alert } from '@/components/Alert'
import { EmptyState } from '@/components/EmptyState'

type Props = {
  balances: GetTokenBalancesResponse | undefined
  isFetching: boolean
  isError: boolean
}

export const TokenBalances = ({ balances, isFetching, isError }: Props) => (
  <div className="flex flex-col gap-5">
    <div className="font-title text-2xl font-bold text-white">Balances</div>

    {isError ? (
      <Alert type="error" message="Failed to load your token balances" />
    ) : isFetching ? (
      <Alert type="loader" message="Loading your token balances" />
    ) : balances ? (
      <div>Has balances</div>
    ) : (
      <EmptyState
        title="No balances loaded yet"
        subtitle="Please enter your Ethereum address to load them"
      />
    )}
  </div>
)
