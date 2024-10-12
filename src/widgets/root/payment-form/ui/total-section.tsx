import { useCartStore } from '@/entities/cart'

export const TotalSection = () => {
  const { totalPrice } = useCartStore(state => state)

  return (
    <div className='md:max-w-[320px] xl:max-w-[413px]'>
      <p className='inline-flex w-full items-center justify-between'>
        <span className='text-[22px]/[28.6px] font-medium'>
          Сума до сплати:
        </span>
        <span className='text-[32px]/[41.6px] font-medium'>{totalPrice}₴</span>
      </p>
      <p className='mt-4 inline-flex w-full justify-between'>
        <span className='text-[18px]/[23.4px]'>Доставка:</span>
        <span className='text-[18px]/[23.4px]'>за тарифами оператора</span>
      </p>
    </div>
  )
}
