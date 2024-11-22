import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/utils'

type Props = {
  proceedOrderSlot: React.ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const OrderControllers = ({ proceedOrderSlot, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        'flex flex-col justify-end gap-8 md:flex-row md:items-end',
        rest.className,
      )}
    >
      {proceedOrderSlot}
    </div>
  )
}
