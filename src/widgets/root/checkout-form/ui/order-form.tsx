'use client'

import { useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ProceedOrder } from '@/features/root/proceed-order'
import { useCartStore } from '@/entities/cart'
import { Form } from '@/shared/ui/common/form'
import {
  KEYS,
  LIQPAY_TEST_PRIVATE_KEY,
  LIQPAY_TEST_PUBLIC_KEY,
} from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { constructLiqpayPayload } from '@/shared/lib/utils/liqpay'
import { PaymentSection } from '../../payment-section'
import { ControlledFields } from '../model'
import { DeliverySection } from './delivery-section'
import { OrderSection } from './order-section'

export const OrderForm = () => {
  const [currentTab, setCurrentTab] = useState('address')
  const [addressIsValid, setAddressIsValid] = useState(false)
  const liqpayFormRef = useRef<HTMLFormElement>(null)
  const { totalPrice, cart } = useCartStore(state => state)

  const schema = yup
    .object({
      city: yup.string().required("Поле обов'язкове для заповнення."),
      street: yup.string().required("Поле обов'язкове для заповнення."),
      buildingNumber: yup.string().required("Поле обов'язкове для заповнення."),
      entrance: yup.string(),
      appartmentHouse: yup.string(),
      story: yup.string(),
      intercom: yup.string(),
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
      city: 'Київ',
      street: '',
      buildingNumber: '',
      entrance: '',
      appartmentHouse: '',
      story: '',
      intercom: '',
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

  const handleSubmit = (values: ControlledFields) => {
    if (liqpayFormRef.current) {
      const dataField = liqpayFormRef.current.children[0] as HTMLInputElement
      const signatureField = liqpayFormRef.current
        .children[1] as HTMLInputElement

      const orderId = Date.now().toString()

      console.log(cart)

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
          process.env.NODE_ENV !== 'production'
            ? 'http://localhost:3000/confirmation'
            : 'https://pasta-client.vercel.app/confirmation',
        info: JSON.stringify({ details: values }),
      })

      dataField.value = data
      signatureField.value = signature

      localStorage.setItem(KEYS.liqpayId, orderId)
      liqpayFormRef.current.submit()
    }
  }

  const proceedNext = async () => {
    await form.trigger('city')
    await form.trigger('street')
    await form.trigger('buildingNumber')

    const streetIsValid = form.getFieldState('street').invalid
    const cityIsValid = form.getFieldState('city').invalid
    const buildingNumberIsValid = form.getFieldState('buildingNumber').invalid

    const isValid = !streetIsValid && !cityIsValid && !buildingNumberIsValid

    if (isValid) {
      setAddressIsValid(true)
      setCurrentTab('contacts')
    }
  }

  return (
    <>
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
          <Tabs value={currentTab} onValueChange={val => setCurrentTab(val)}>
            <TabsList className='mx-auto grid w-full max-w-32 grid-cols-2 gap-4'>
              <TabsTrigger
                className='rounded-[30px] bg-primary-lighter'
                value='address'
              ></TabsTrigger>
              <TabsTrigger
                disabled={!addressIsValid}
                className='rounded-[30px] bg-primary-lighter disabled:bg-gray-400'
                value='contacts'
              ></TabsTrigger>
            </TabsList>
            <TabsContent value='address'>
              <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[52px] xl:gap-[180px]'>
                <DeliverySection form={form} />
                <OrderSection
                  proceedOrderSlot={<ProceedOrder onSubmit={proceedNext} />}
                />
              </div>
            </TabsContent>
            <TabsContent value='contacts'>
              <PaymentSection
                form={form}
                proceedOrderSlot={
                  <ProceedOrder
                    className={cn(
                      !cart.length &&
                        'pointer-events-none border-gray-700 bg-gray-600',
                    )}
                  >
                    Оплатити
                  </ProceedOrder>
                }
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
