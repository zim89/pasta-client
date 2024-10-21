import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/utils'

type Props = {
  value: number
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const Indicator = ({ value, className, ...rest }: Props) => {
  return (
    <span
      {...rest}
      className={cn(
        'absolute left-1/2 top-0 -translate-x-1/2 text-xs/none',
        className,
      )}
    >
      {value}
    </span>
  )
}
