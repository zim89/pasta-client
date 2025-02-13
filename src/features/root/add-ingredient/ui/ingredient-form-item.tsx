import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import type { ControllerRenderProps, UseFormReturn } from 'react-hook-form'

import type { Ingredient } from '@/entities/ingredient'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/common/form'
import { Input } from '@/shared/ui/common/input'

export const IngredientFormItem = ({
  i,
  field,
  form,
  setPrice,
}: {
  i: Ingredient
  field: ControllerRenderProps
  form: UseFormReturn
  setPrice: Dispatch<SetStateAction<number>>
}) => {
  const onIncrement = () => {
    form.setValue(i.name, form.getValues(i.name) + 1)
    setPrice(prev => prev + i.price)
  }

  const onDecrement = () => {
    form.setValue(i.name, form.getValues(i.name) - 1)
    setPrice(prev => prev - i.price)
  }

  return (
    <>
      <FormItem className='flex flex-col gap-2 space-y-0 p-2 md:w-[192px] md:flex-row md:p-0'>
        <div className='space-y-2 md:space-y-0'>
          <FormLabel className='flex justify-center text-sm/[18.2px] font-semibold capitalize md:hidden'>
            {i.label}
          </FormLabel>

          <div className='relative mx-auto size-20 overflow-hidden rounded-md'>
            <Image
              src={i.image}
              alt={i.name}
              fill={true}
              sizes='100%'
              className='object-cover'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2 md:w-[108px] md:justify-between'>
          <FormLabel className='hidden p-0 text-sm/[18.2px] font-semibold capitalize md:inline-block'>
            {i.label}
          </FormLabel>
          <p className='text-center text-xs/[15.6px] md:text-start'>{`${i.price}₴ / ${i.weight} г`}</p>

          <div className='flex items-center justify-between'>
            <button
              disabled={form.getValues(i.name) === 0}
              type='button'
              onClick={onDecrement}
              className='flex size-8 items-center justify-center rounded-[7.55px] border-[1.26px] border-black/5 text-[22px]/[28.6px] font-medium transition-colors duration-300 hover:text-primary-light disabled:text-gray-400 md:size-[26px] md:rounded-md md:text-sm/[18.2px]'
            >
              -
            </button>
            <FormControl>
              <Input
                {...field}
                readOnly
                className='flex size-8 items-center justify-center rounded-[7.55px] border-[1.26px] border-black/10 p-0 text-center text-[22px]/[28.6px] font-medium md:size-[26px] md:rounded-md md:text-sm/[18.2px] md:font-normal'
              />
            </FormControl>
            <button
              type='button'
              onClick={onIncrement}
              className='flex size-8 items-center justify-center rounded-[7.55px] border-[1.26px] border-black/5 text-[22px]/[28.6px] font-medium transition-colors duration-300 hover:text-primary-light disabled:text-gray-400 md:size-[26px] md:rounded-md md:text-sm/[18.2px]'
            >
              +
            </button>
          </div>
        </div>

        <FormMessage />
      </FormItem>
    </>
  )
}
