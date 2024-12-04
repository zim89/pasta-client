import { cn } from '../lib/utils'

type Props = {
  totalPrice: number
  showDelivery?: boolean
  summaryText?: string
  classNames?: {
    root?: string
    summaryText?: string
    delivery?: string
  }
}

export const OrderSummary = ({
  totalPrice,
  showDelivery = true,
  summaryText = 'Сума до сплати:',
  classNames,
}: Props) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4 self-end pt-16',
        classNames?.root,
      )}
    >
      <p className={cn('inline-flex justify-between', classNames?.summaryText)}>
        <span className='text-[22px]/[28.6px] font-medium'>{summaryText}</span>
        <span className='text-[32px]/[41.6px] font-medium'>{totalPrice}₴</span>
      </p>
      {showDelivery && (
        <p className={cn('inline-flex justify-between', classNames?.delivery)}>
          <span className='text-[18px]/[23.4px]'>Доставка:</span>

          <span className='text-[18px]/[23.4px]'>
            {totalPrice >= 700 ? 'безкоштовно' : 'за тарифами оператора'}
          </span>
        </p>
      )}
    </div>
  )
}
