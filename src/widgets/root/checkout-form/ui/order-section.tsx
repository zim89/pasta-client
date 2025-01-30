'use client'

import { OrderControllers } from '@/shared/ui/order-controllers'
import { OrderSummary } from '@/shared/ui/order-summary'

import { ProceedOrder } from '@/features/root/proceed-order'
import { useCartStore } from '@/entities/cart'
import { OrderFields } from './order-fields'

type Props = {
  proceedOrderSlot?: React.ReactNode
}

export const OrderSection = ({
  proceedOrderSlot = <ProceedOrder />,
}: Props) => {
  const { cart, totalPrice, decrementItem, incrementItem, removeFromCart } =
    useCartStore(state => state)

  return (
    <div className='flex w-full flex-col md:max-w-[342px] xl:max-w-full'>
      <h3 className='mb-7 text-[18px] font-medium xl:mb-8 xl:text-[26px]/[31.47px]'>
        Ваше замовлення
      </h3>
      <p className='mb-1 pr-1 text-sm xl:text-base/[20.8px]'>
        Мінімальна сума для безкоштовної доставки 700 грн
      </p>
      <OrderFields
        cart={cart}
        decrementItem={decrementItem}
        incrementItem={incrementItem}
        removeFromCart={removeFromCart}
      />
      <OrderSummary totalPrice={totalPrice} />
      <OrderControllers
        className='mt-10 md:mt-[60px]'
        proceedOrderSlot={proceedOrderSlot}
      />
    </div>
  )
}
