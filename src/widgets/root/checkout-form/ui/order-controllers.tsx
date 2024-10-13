import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { cn } from '@/shared/lib/utils'

type Props = {
  proceedOrderSlot: React.ReactNode
  returnToMenuSlot: React.ReactNode
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const OrderControllers = ({
  proceedOrderSlot,
  returnToMenuSlot,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        'flex flex-col justify-between gap-8 md:flex-row md:items-end',
        rest.className,
      )}
    >
      {proceedOrderSlot}
      <div className='mt-auto md:order-[-1]'>{returnToMenuSlot}</div>
    </div>
  )
}
