'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ReturnToMenu } from '@/shared/ui/return-to-menu'
import { useForm } from 'react-hook-form'

import { ProceedOrder } from '@/features/root/proceed-order'
import { useCartStore } from '@/entities/cart'
import { Form } from '@/shared/ui/common/form'
import { DeliverySection } from './delivery-section'
import { OrderControllers } from './order-controllers'
import { OrderSection } from './order-section'

export const OrderForm = () => {
  const router = useRouter()
  const { cart, toggleCartDrawer } = useCartStore(state => state)

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

  const handleSubmit = (values: typeof form.formState.defaultValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[52px] xl:gap-[180px]'>
          <DeliverySection form={form} />
          <OrderSection />
        </div>

        <OrderControllers
          proceedOrderSlot={<ProceedOrder />}
          returnToMenuSlot={<ReturnToMenu />}
        />
      </form>
    </Form>
  )
}
