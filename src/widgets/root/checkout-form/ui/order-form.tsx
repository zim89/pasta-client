'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui'
import { WithBlock } from '@/shared/ui/with-block'
import { useFormik } from 'formik'

import { orderItems } from '@/entities/order-item'
import { DELIVERY_PRICE } from '@/shared/constants'
import { useRootWarnWhenUnsavedChanges } from '@/shared/lib/hooks/useRootWarnWhenUnsavedChanges'
import { OrderField } from '../../../../entities/order-item/ui/order-field'
import { OrderItem } from '../model'
import { DeliverySection } from './delivery-section'
import { OrderFields } from './order-fields'

export const OrderForm = () => {
  const router = useRouter()
  const [_, setUnsavedChanges] = useRootWarnWhenUnsavedChanges()

  useEffect(() => {
    setUnsavedChanges(true)
  }, [])

  const formik = useFormik({
    initialValues: {
      city: 'Київ',
      street: '',
      buildingNumber: '',
      entrance: '',
      appartmentHouse: '',
      story: '',
      intercom: '',
      orderItems: orderItems.map((dish, index) => ({
        id: index,
        quantity: 1,
        image: dish.image,
        title: dish.title,
        price: dish.price,
      })),
    },
    onSubmit: values => {
      console.log(values)
    },
  })

  useEffect(() => {
    if (!formik.values.orderItems.length) {
      setUnsavedChanges(false)
      router.push('/')
    }
  }, [formik.values.orderItems.length])

  const subTotal = formik.values.orderItems.reduce(
    (acc, prev) => acc + prev.price * prev.quantity,
    0,
  )

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[52px] xl:gap-[180px]'>
        <DeliverySection form={formik} />
        <div className='flex w-full flex-col'>
          <h3 className='mb-7 text-[18px] font-medium xl:mb-8 xl:text-[26px]/[31.47px]'>
            Ваше замовлення
          </h3>
          <p className='mb-1 text-sm xl:text-base'>
            Мінімальна сума для безкоштовної доставки 700 грн
          </p>
          <OrderFields form={formik} />
          <div className='mt-auto flex w-[320px] flex-col gap-4 self-end pt-16 xl:w-[413px]'>
            <p className='inline-flex justify-between'>
              <span className='text-[18px]/[23.4px]'>Товарів на суму:</span>
              <span className='text-[26px]/[31.47px] font-medium'>
                {subTotal}₴
              </span>
            </p>
            <p className='inline-flex justify-between'>
              <span className='text-[18px]/[23.4px]'>Доставка:</span>

              <span className='text-[26px]/[31.47px] font-medium'>
                {subTotal && DELIVERY_PRICE}₴
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
      <div className='flex flex-col justify-between gap-8 md:flex-row md:items-center'>
        <div className='mt-auto'>
          <WithBlock>
            <Link
              href='/menu'
              className='outline-link block w-full text-base md:w-80 xl:w-[413px]'
            >
              Повернутись до меню
            </Link>
          </WithBlock>
        </div>
        <Button
          type='submit'
          className='w-full md:max-w-80 xl:max-w-[413px]'
          variant='filled'
          size='lg'
        >
          Оформити замовлення
        </Button>
      </div>
    </form>
  )
}
