'use client'

import { ReturnToMenu } from '@/shared/ui/return-to-menu'
import { useForm } from 'react-hook-form'

import { ProceedOrder } from '@/features/root/proceed-order'
import { useOrderStore } from '@/entities/order/model/order-store-provider'
import { Form } from '@/shared/ui/common/form'
import { OrderControllers } from '../../checkout-form/ui/order-controllers'
import { DesktopComposition } from './desktop-composition'
import { MobileComposition } from './mobile-compostion'
import { TabletComposition } from './tablet-composition'

export const PaymentForm = () => {
  const { shippingAddress } = useOrderStore(state => state)

  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      deliveryDate: 'today',
      deliveryTime: '',
      paymentMethod: '',
      comment: '',
    },
  })

  console.log('Shipping Address: ', shippingAddress)

  const handleSubmit = () => {
    console.log('Processing payment form...')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <MobileComposition form={form} />
        <TabletComposition form={form} />
        <DesktopComposition form={form} />

        <OrderControllers
          className='mt-10 md:mt-[60px]'
          proceedOrderSlot={<ProceedOrder>Оплатити</ProceedOrder>}
          returnToMenuSlot={<ReturnToMenu />}
        />
      </form>
    </Form>
  )
}
