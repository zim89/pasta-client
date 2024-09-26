'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { Input } from '@/shared/ui'
import { useFormik } from 'formik'

import { Autocomplete } from '@/features/root/checkout-order/ui/autocomplete'
import { streets } from '@/shared/data/streets.data'

export const CheckoutOrder = () => {
  const formik = useFormik({
    initialValues: {
      city: 'Київ',
      street: '',
      buildingNumber: '',
      entrance: '',
      appartmentHouse: '',
      story: '',
      intercom: '',
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
      <div className='flex'>
        <div className='flex flex-col'>
          <h3 className='text-center text-[26px]/[31.47px] font-medium'>
            Адреса доставки
          </h3>
          <div>
            <label htmlFor='city'>Місто</label>
            <Input id='city' {...formik.getFieldProps('city')} disabled />
          </div>

          <Autocomplete
            inputProps={{
              onChange: val => formik.setFieldValue('street', val),
              value: formik.values.street,
              placeholder: 'Введіть вулицю',
              required: true,
            }}
            suggestions={suggestions}
          />

          <Input
            placeholder='Введіть номер будинку'
            {...formik.getFieldProps('buildingNumber')}
          />

          <Input
            placeholder="Введіть номер під'їзду"
            {...formik.getFieldProps('entrance')}
          />

          <Input
            placeholder='Введіть номер квартири'
            {...formik.getFieldProps('appartmentHouse')}
          />

          <Input
            placeholder='Введіть номер поверху'
            {...formik.getFieldProps('story')}
          />

          <Input
            placeholder='Введіть код домофону'
            {...formik.getFieldProps('intercom')}
          />

          <Link href='/menu'>Повернутись до меню</Link>
        </div>
        <div className='flex flex-col'>
          <button type='submit'>Оформити замовлення</button>
        </div>
      </div>
    </form>
  )
}
