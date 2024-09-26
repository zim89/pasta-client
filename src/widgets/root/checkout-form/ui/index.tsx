'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Button, Input } from '@/shared/ui'
import { WithRequiredMark } from '@/shared/ui/with-required-mark'
import { useFormik } from 'formik'

import { Autocomplete } from '@/widgets/root/checkout-form/ui/autocomplete'
import { Dish } from '@/entities/dish'
import { streets } from '@/shared/data/streets.data'
import { OrderField } from './OrderField'

const selectedDishes: Dish[] = [
  {
    id: 1,
    title: 'Напій Pepsi zero',
    slug: 'napij-pepsi-zero',
    weight: null,
    volume: null,
    composition: null,
    price: 72,
    image:
      'https://images.bolt.eu/store/2024/2024-04-07/c128ea29-2204-4644-bf60-b2f4b8a05c3d.webp',
    type: 'Напій',
    orderCount: 42,
    isNew: false,
    customizable: false,
  },
  {
    id: 4,
    title: 'Вода негазована',
    slug: 'voda-negazovana',
    weight: null,
    volume: 0.5,
    composition: null,
    price: 68,
    image:
      'https://images.bolt.eu/store/2023/2023-02-16/1a4c621b-ee06-4c79-9ea3-8181077de4b5.jpeg',
    type: 'Напій',
    orderCount: 44,
    isNew: false,
    customizable: false,
  },
  {
    id: 3,
    title: 'Паста "Карбонара"',
    slug: 'pasta-karbonara',
    weight: 320,
    volume: null,
    composition: 'Вершковий соус з беконом, пармезаном і жовтком',
    price: 329,
    image:
      'https://images.bolt.eu/store/2022/2022-03-29/3609559b-2928-4f05-98c4-6df02772e616.jpeg',
    type: 'Паста',
    orderCount: 35,
    isNew: false,
    customizable: true,
  },
]

export const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      city: 'Київ',
      street: '',
      buildingNumber: '',
      entrance: '',
      appartmentHouse: '',
      story: '',
      intercom: '',
      selectedDishes,
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
          <Link href='/menu' className='outline-link mt-auto'>
            Повернутись до меню
          </Link>
        </div>
        <div className='flex w-full flex-col'>
          <h3 className='mb-8 text-[26px]/[31.47px] font-medium'>
            Ваше замовлення
          </h3>
          <p>Мінімальна сума для безкоштовної доставки 700 грн</p>
          {formik.values.selectedDishes.length > 0 &&
            formik.values.selectedDishes.map(order => (
              <OrderField key={order.id} dish={order} removeDish={() => {}} />
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
