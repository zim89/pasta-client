'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { useCartStore } from '@/entities/cart'
import { Form } from '@/shared/ui/common/form'
import { DELIVERY_PRICE } from '@/shared/constants'
import { DeliverySection } from './delivery-section'
import { OrderFields } from './order-fields'

type Props = {
  proceedOrderSlot: React.ReactNode
  returnToMenuSlot: React.ReactElement
}

export const OrderForm = ({ proceedOrderSlot, returnToMenuSlot }: Props) => {
  const router = useRouter()
  const { cart, decrementItem, incrementItem, removeFromCart } = useCartStore(
    state => state,
  )

  const form = useForm({
    defaultValues: {
      city: 'Київ',
      street: '',
      buildingNumber: '',
      entrance: '',
      appartmentHouse: '',
      story: '',
      intercom: '',
    },
  })

  useEffect(() => {
    if (!cart.length) {
      router.push('/menu')
    }
  }, [cart.length])

  const subTotal = cart.reduce((acc, prev) => acc + prev.price * prev.count, 0)

  const handleSubmit = (values: typeof form.formState.defaultValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[52px] xl:gap-[180px]'>
          <DeliverySection form={form} />
          <div className='flex w-full flex-col'>
            <h3 className='mb-7 text-[18px] font-medium xl:mb-8 xl:text-[26px]/[31.47px]'>
              Ваше замовлення
            </h3>
            <p className='mb-1 text-sm xl:text-base'>
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
                  {subTotal}₴
                </span>
              </p>
              <p className='inline-flex justify-between'>
                <span className='text-[18px]/[23.4px]'>Доставка:</span>

                <span className='text-[18px]/[23.4px]'>
                  за тарифами оператора
                </span>
              </p>
              <p className='inline-flex justify-between'>
                <span className='text-[22px]/[28.6px] font-medium'>
                  Сума до сплати:
                </span>
                <span className='text-4xl/[41.6px] font-medium'>
                  {subTotal && subTotal + DELIVERY_PRICE}₴
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Controllers */}
        <div className='flex flex-col justify-between gap-8 md:items-end'>
          <div className='mt-auto'>{returnToMenuSlot}</div>
          {proceedOrderSlot}
        </div>
      </form>
    </Form>
  )
}
