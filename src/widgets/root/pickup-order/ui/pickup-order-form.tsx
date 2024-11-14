'use client'

import { useRef, useState } from 'react'
import { Form, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import { OrderControllers } from '@/shared/ui/order-controllers'
import { PickupAddress } from '@/shared/ui/pickup-address'
import { ReturnToMenu } from '@/shared/ui/return-to-menu'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ProceedOrder } from '@/features/root/proceed-order'
import { useCartStore } from '@/entities/cart'
import {
  KEYS,
  LIQPAY_TEST_PRIVATE_KEY,
  LIQPAY_TEST_PUBLIC_KEY,
} from '@/shared/constants'
import { constructLiqpayPayload } from '@/shared/lib/utils/liqpay'
import { PaymentSection } from '../../payment-section'

type Fields = {
  name: string
  phone: string
  email?: string
  deliveryDate: string
  deliveryTime: string
  paymentMethod: string
  comment?: string
}

type Props = {
  ordersSlot: React.ReactNode
}

export const PickupOrderForm = ({ ordersSlot }: Props) => {
  const [currentTab, setCurrentTab] = useState('address')
  const liqpayFormRef = useRef<HTMLFormElement>(null)
  const { totalPrice, cart } = useCartStore(state => state)

  const schema = yup
    .object({
      name: yup.string().required("Поле обов'язкове для заповнення."),
      phone: yup.string().required("Поле обов'язкове для заповнення."),
      email: yup.string(),
      deliveryDate: yup.string().required("Поле обов'язкове для заповнення."),
      deliveryTime: yup.string().required("Поле обов'язкове для заповнення."),
      paymentMethod: yup.string().required("Поле обов'язкове для заповнення."),
      comment: yup.string(),
    })
    .required()

  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      deliveryDate: 'today',
      deliveryTime: '',
      paymentMethod: 'card',
      comment: '',
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values: Fields) => {
    if (liqpayFormRef.current) {
      const dataField = liqpayFormRef.current.children[0] as HTMLInputElement
      const signatureField = liqpayFormRef.current
        .children[1] as HTMLInputElement

      const orderId = Date.now().toString()

      const { data, signature } = constructLiqpayPayload({
        publicKey: `${LIQPAY_TEST_PUBLIC_KEY}`,
        privateKey: `${LIQPAY_TEST_PRIVATE_KEY}`,
        version: 3,
        action: 'pay',
        amount: totalPrice,
        description: `Замовлення їжі: 
          ${cart
            .map(item => {
              return `- ${item.dish.category.name}: ${item.dish.title} x ${item.count} - ${item.price} грн.
              - Обрані інгредієнти: ${item.ingredients.length === 0 ? 'не обрано' : item.ingredients.reduce((acc, prev) => acc + ` ${prev.label} (${prev.count}),`, '')}`
            })
            .join('\n')}`,
        orderId,
        result_url:
          'https://pasta-la-pepito-fsd.localhost:44382/confirmation?pickup=true',
        info: JSON.stringify({ details: values }),
      })

      dataField.value = data
      signatureField.value = signature

      localStorage.setItem(KEYS.liqpayId, orderId)
      liqpayFormRef.current.submit()
    }
  }

  const proceedNext = async () => {
    setCurrentTab('contacts')
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Tabs value={currentTab} onValueChange={val => setCurrentTab(val)}>
            <TabsList className='mx-auto grid w-full max-w-32 grid-cols-2 gap-4'>
              <TabsTrigger
                className='rounded-[30px] bg-primary-lighter'
                value='address'
              ></TabsTrigger>
              <TabsTrigger
                className='rounded-[30px] bg-primary-lighter disabled:bg-gray-400'
                value='contacts'
              ></TabsTrigger>
            </TabsList>
            <TabsContent value='address'>
              <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[62px] xl:gap-[180px]'>
                <PickupAddress />
                <div className='xl:w-[700px]'>{ordersSlot}</div>
              </div>
              <OrderControllers
                proceedOrderSlot={
                  <ProceedOrder onSubmit={proceedNext}>
                    Оформити замовлення
                  </ProceedOrder>
                }
                returnToMenuSlot={<ReturnToMenu />}
              />
            </TabsContent>
            <TabsContent value='contacts'>
              <PaymentSection form={form} />

              <OrderControllers
                className='mt-10 md:mt-[60px]'
                proceedOrderSlot={
                  <ProceedOrder
                    className={
                      !cart.length
                        ? 'pointer-events-none border-gray-700 bg-gray-600'
                        : ''
                    }
                  >
                    Оплатити
                  </ProceedOrder>
                }
                returnToMenuSlot={<ReturnToMenu />}
              />
            </TabsContent>
          </Tabs>
        </form>
      </Form>
      <form
        ref={liqpayFormRef}
        method='POST'
        action='https://www.liqpay.ua/api/3/checkout'
        acceptCharset='utf-8'
      >
        <input type='hidden' name='data' />
        <input type='hidden' name='signature' />
      </form>
    </>
  )
}
