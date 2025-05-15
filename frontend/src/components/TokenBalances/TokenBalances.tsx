type Props = {
  balances: boolean | undefined
}

export const TokenBalances = ({ balances }: Props) => (
  <div className="flex flex-col gap-5">
    <div className="font-title text-2xl font-bold text-white">Balances</div>
    {balances ? <div>Has balance</div> : <div>Empty state</div>}
  </div>
)
