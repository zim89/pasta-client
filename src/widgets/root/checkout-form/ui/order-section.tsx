'use client'

import { useCartStore } from '@/entities/cart'
import { OrderFields } from './order-fields'

export const OrderSection = () => {
  const { cart, totalPrice, decrementItem, incrementItem, removeFromCart } =
    useCartStore(state => state)

  return (
    <div className='flex w-full flex-col md:max-w-[342px] xl:max-w-full'>
      <h3 className='mb-7 text-[18px] font-medium xl:mb-8 xl:text-[26px]/[31.47px]'>
        Ваше замовлення
      </h3>
      <p className='mb-1 text-sm xl:text-base/[20.8px]'>
        Мінімальна сума для безкоштовної доставки 700 грн
      </p>
      <OrderFields
        cart={cart}
        decrementItem={decrementItem}
        incrementItem={incrementItem}
        removeFromCart={removeFromCart}
      />
      <div className='mt-auto flex w-[320px] flex-col gap-4 self-end pt-16 xl:w-[413px]'>
        <p className='inline-flex justify-between'>
          <span className='text-[18px]/[23.4px]'>Товарів на суму:</span>
          <span className='text-[26px]/[31.47px] font-medium'>
            {totalPrice}₴
          </span>
        </p>
        <p className='inline-flex justify-between'>
          <span className='text-[18px]/[23.4px]'>Доставка:</span>

          <span className='text-[18px]/[23.4px]'>за тарифами оператора</span>
        </p>
        <p className='inline-flex justify-between'>
          <span className='text-[22px]/[28.6px] font-medium'>
            Сума до сплати:
          </span>
          <span className='text-4xl/[41.6px] font-medium'>{totalPrice}₴</span>
        </p>
      </div>
    </div>
  )
}
