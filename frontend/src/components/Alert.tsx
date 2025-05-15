import { JSX } from 'react'
import CircleXIcon from '@/assets/circle-x.svg?react'
import { Spinner } from './Spinner'

type Props = {
  type: 'error' | 'loader'
  message: string
}

const ICONS_BY_TYPE: Record<Props['type'], JSX.Element> = {
  error: <CircleXIcon />,
  loader: <Spinner sizeClassNames="h-5 w-5" />,
}

const CLASS_NAMES_BY_TYPE: Record<Props['type'], string> = {
  error: 'border-alert-error-border bg-alert-error-bg',
  loader: 'border-alert-spinner-border bg-alert-spinner-bg',
}

export const Alert = ({ type, message }: Props) => {
  const Icon = ICONS_BY_TYPE[type]

  return (
    <div
      className={`p- flex items-center gap-2.5 rounded-lg border-1 pt-[15px] pr-4 pb-[15px] pl-4 ${CLASS_NAMES_BY_TYPE[type]}`}
    >
      <div className="shrink-0">{Icon}</div>
      <div className="text-alert-text text-base">{message}</div>
    </div>
  )
}
