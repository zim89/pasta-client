import { useMemo } from 'react'
import { Input } from '@/shared/ui'
import { WithRequiredMark } from '@/shared/ui/with-required-mark'

import { streets } from '@/shared/data/streets.data'
import { OrderForm } from '../model'
import { Autocomplete } from './autocomplete'

type Props = {
  form: OrderForm
}

export const DeliverySection = ({ form }: Props) => {
  const suggestions = useMemo(() => {
    return streets
      .filter(str =>
        str.toLowerCase().includes(form.values.street.toLowerCase()),
      )
      .slice(0, 15)
  }, [form.values.street])

  return (
    <div className='flex w-full max-w-[400px] flex-col gap-7 rounded-[20px] border border-primary-light px-[10px] py-6 md:border-0 md:py-0'>
      <h3 className='mb-1 text-[18px]/[23.4px] font-medium xl:text-center xl:text-[26px]/[31.47px]'>
        Адреса доставки
      </h3>
      <div>
        <label htmlFor='city' className='text-sm'>
          Місто
        </label>
        <Input id='city' {...form.getFieldProps('city')} disabled />
      </div>

      <div>
        <label htmlFor='street' className='text-sm'>
          <WithRequiredMark text='Вулиця' />
        </label>
        <Autocomplete
          inputProps={{
            onChange: val => form.setFieldValue('street', val),
            value: form.values.street,
            placeholder: 'Введіть вулицю',
            required: true,
            id: 'street',
          }}
          suggestions={suggestions}
        />
      </div>

      <div>
        <label htmlFor='buildingNumber' className='text-sm'>
          <WithRequiredMark text='Номер будинку' />
        </label>
        <Input
          id='buildingNumber'
          placeholder='Введіть номер будинку'
          required
          {...form.getFieldProps('buildingNumber')}
        />
      </div>

      <div>
        <label htmlFor='entrance' className='text-sm'>{`Під'їзд`}</label>
        <Input
          id='entrance'
          placeholder="Введіть номер під'їзду"
          {...form.getFieldProps('entrance')}
        />
      </div>

      <div>
        <label htmlFor='appartmentHouse' className='text-sm'>
          Номер квартири
        </label>
        <Input
          id='appartmentHouse'
          placeholder='Введіть номер квартири'
          {...form.getFieldProps('appartmentHouse')}
        />
      </div>

      <div>
        <label htmlFor='story' className='text-sm'>
          Поверх
        </label>
        <Input
          id='story'
          placeholder='Введіть номер поверху'
          {...form.getFieldProps('story')}
        />
      </div>

      <div>
        <label htmlFor='intercom' className='text-sm'>
          Код домофону
        </label>
        <Input
          id='intercom'
          placeholder='Введіть код домофону'
          {...form.getFieldProps('intercom')}
        />
      </div>
    </div>
  )
}
