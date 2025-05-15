import { Tooltip as ReactTooltip } from 'react-tooltip'
import { FC, PropsWithChildren } from 'react'

type Props = {
  id: string
  content: string
  hidden?: boolean
}

export const Tooltip: FC<PropsWithChildren<Props>> = ({
  id,
  content,
  hidden = false,
  children,
}) => (
  <>
    <ReactTooltip
      id={id}
      content={content}
      hidden={hidden}
      className="react-tooltip"
      noArrow
    />
    <div data-tooltip-id={id}>{children}</div>
  </>
)
