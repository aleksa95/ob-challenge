type Props = {
  title: string
  subtitle: string
}

export const EmptyState = ({ title, subtitle }: Props) => (
  <div className="bg-empty-state-bg flex flex-col items-center justify-center gap-2 rounded-lg p-10 text-center">
    <div className="font-title text-xl text-white">{title}</div>
    <div className="font-title text-empty-state-subtitle text-base">
      {subtitle}
    </div>
  </div>
)
