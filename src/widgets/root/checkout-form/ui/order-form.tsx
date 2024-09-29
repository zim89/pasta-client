'use client'

import { useContext, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Button, Input } from '@/shared/ui'
import { WithBlock } from '@/shared/ui/with-block'
import { WithRequiredMark } from '@/shared/ui/with-required-mark'
import { useFormik } from 'formik'

import { Autocomplete } from '@/widgets/root/checkout-form/ui/autocomplete'
import { Dish } from '@/entities/dish'
import { orderItems } from '@/entities/order-item'
import { useRootWarnWhenUnsavedChanges } from '@/shared/lib/hooks/useRootWarnWhenUnsavedChanges'
import { streets } from '@/shared/data/streets.data'
import { OrderField } from '../../../../entities/order-item/ui/order-field'

export type OrderItem = {
  id: number
  quantity: number
  image: Dish['image']
  title: Dish['title']
  price: Dish['price']
}

export const OrderForm = () => {
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

  const suggestions = useMemo(() => {
    return streets
      .filter(str =>
        str.toLowerCase().includes(formik.values.street.toLowerCase()),
      )
      .slice(0, 15)
  }, [formik.values.street])

  const changeQuantity = (op: 'INCREASE' | 'DECREASE', id: number) => {
    const candidate = formik.values.orderItems.find(item => item.id === id)

    if (candidate) {
      let newValues: OrderItem[] = []

      switch (op) {
        case 'DECREASE':
          newValues = formik.values.orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: Math.max(0, dish.quantity - 1),
                }
              : dish,
          )
          break
        case 'INCREASE':
          newValues = formik.values.orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: dish.quantity + 1,
                }
              : dish,
          )
          break
      }

      formik.setFieldValue('orderItems', newValues)
    }
  }

  const removeOrderItem = (id: number) => {
    const candidate = formik.values.orderItems.find(item => item.id === id)
    if (candidate) {
      formik.setFieldValue(
        'selectedDishes',
        formik.values.orderItems.filter(item => item.id !== id),
      )
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='my-12 flex gap-[180px]'>
        <div className='flex w-full max-w-[400px] flex-col gap-7'>
          <h3 className='mb-1 text-center text-[26px]/[31.47px] font-medium'>
            Адреса доставки
          </h3>
          <div>
            <label htmlFor='city'>Місто</label>
            <Input id='city' {...formik.getFieldProps('city')} disabled />
          </div>

          <div>
            <label htmlFor='street'>
              <WithRequiredMark text='Вулиця' />
            </label>
            <Autocomplete
              inputProps={{
                onChange: val => formik.setFieldValue('street', val),
                value: formik.values.street,
                placeholder: 'Введіть вулицю',
                required: true,
                id: 'street',
              }}
              suggestions={suggestions}
            />
          </div>

          <div>
            <label htmlFor='buildingNumber'>
              <WithRequiredMark text='Номер будинку' />
            </label>
            <Input
              id='buildingNumber'
              placeholder='Введіть номер будинку'
              required
              {...formik.getFieldProps('buildingNumber')}
            />
          </div>

          <div>
            <label htmlFor='entrance'>{`Під'їзд`}</label>
            <Input
              id='entrance'
              placeholder="Введіть номер під'їзду"
              {...formik.getFieldProps('entrance')}
            />
          </div>

          <div>
            <label htmlFor='appartmentHouse'>Номер квартири</label>
            <Input
              id='appartmentHouse'
              placeholder='Введіть номер квартири'
              {...formik.getFieldProps('appartmentHouse')}
            />
          </div>

          <div>
            <label htmlFor='story'>Поверх</label>
            <Input
              id='story'
              placeholder='Введіть номер поверху'
              {...formik.getFieldProps('story')}
            />
          </div>

          <div className='mb-[3.563rem]'>
            <label htmlFor='intercom'>Код домофону</label>
            <Input
              id='intercom'
              placeholder='Введіть код домофону'
              {...formik.getFieldProps('intercom')}
            />
          </div>
          <WithBlock>
            <Link href='/menu' className='outline-link mt-auto block'>
              Повернутись до меню
            </Link>
          </WithBlock>
        </div>
        <div className='flex w-full flex-col'>
          <h3 className='mb-8 text-[26px]/[31.47px] font-medium'>
            Ваше замовлення
          </h3>
          <p>Мінімальна сума для безкоштовної доставки 700 грн</p>
          {formik.values.orderItems.length > 0 &&
            formik.values.orderItems.map(order => (
              <OrderField
                key={order.id}
                item={order}
                removeDish={removeOrderItem}
                changeQuantity={changeQuantity}
              />
            ))}
          <div className='mt-auto flex flex-col gap-4 self-end xl:w-[413px]'>
            <p className='inline-flex justify-between'>
              <span className='text-[18px]/[23.4px]'>Товарів на суму:</span>
              <span className='text-[26px]/[31.47px] font-medium'>960₴</span>
            </p>
            <p className='inline-flex justify-between'>
              <span className='text-[18px]/[23.4px]'>Доставка:</span>
              <span className='text-[26px]/[31.47px] font-medium'>100₴</span>
            </p>
            <p className='inline-flex justify-between'>
              <span className='text-[22px]/[28.6px] font-medium'>
                Сума до сплати:
              </span>
              <span className='text-[26px]/[31.47px] font-medium'>1060₴</span>
            </p>
            <Button type='submit' variant='filled' className='mt-8'>
              Оформити замовлення
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
