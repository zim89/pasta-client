import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '../lib/utils'

type Props = {
  value: number
  format?: Intl.NumberFormatOptions
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export const UAHFormatter = ({
  value,
  className,
  format = {
    notation: 'standard',
    minimumFractionDigits: 2,
  },
  ...rest
}: Props) => {
  return (
    <span {...rest} className={cn('text-sm/[16.8px]', className)}>
      {value ? value.toLocaleString('ua', format) : '00,00'} грн
    </span>
  )
}
