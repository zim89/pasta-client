'use client'

import { useRouter } from 'next/navigation'
import { ReturnToMenu } from '@/shared/ui/return-to-menu'
import { useForm } from 'react-hook-form'

import { ProceedOrder } from '@/features/root/proceed-order'
import { OrderState } from '@/entities/order/model/order-store'
import { useOrderStore } from '@/entities/order/model/order-store-provider'
import { Form } from '@/shared/ui/common/form'
import { DeliverySection } from './delivery-section'
import { OrderControllers } from './order-controllers'
import { OrderSection } from './order-section'

export const OrderForm = () => {
  const router = useRouter()
  const { setShippingAddress } = useOrderStore(state => state)

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
    if (values) {
      const address: OrderState['shippingAddress'] = {
        city: values.city!,
        street: values.street!,
        houseNumber: values.buildingNumber!,
        entrance: values.entrance,
        appartmentNumber: values.appartmentHouse,
        story: values.story,
        intercomCode: values.intercom,
      }

      setShippingAddress(address)
      router.push('/payment')
    }
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
