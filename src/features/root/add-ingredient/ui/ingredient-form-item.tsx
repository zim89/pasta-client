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
      <FormItem className='flex flex-col gap-2 space-y-0 p-2 md:flex-row md:p-0'>
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

        <div className='flex flex-col gap-2 md:justify-between'>
          <FormLabel className='hidden p-0 text-sm/[18.2px] font-semibold capitalize md:inline-block'>
            {i.label}
          </FormLabel>
          <p className='text-center text-xs/[15.6px] md:text-start'>{`${i.price}₴ / ${i.weight} г`}</p>

          <div className='flex items-center justify-between'>
            <button
              disabled={form.getValues(i.name) === 0}
              type='button'
              onClick={onDecrement}
              className='flex size-8 items-center justify-center border-[1.26px] border-black/5 text-[22px]/[28.6px] font-medium'
            >
              -
            </button>
            <FormControl>
              <Input
                {...field}
                readOnly
                className='flex size-8 items-center justify-center border-[1.26px] border-black/5 p-0 text-center text-[22px]/[28.6px] font-medium'
              />
            </FormControl>
            <button
              type='button'
              onClick={onIncrement}
              className='flex size-8 items-center justify-center border-[1.26px] border-black/5 text-[22px]/[28.6px] font-medium'
            >
              +
            </button>
          </div>
        </div>

        <FormMessage />
      </FormItem>

      {/* <FormItem className='hidden xl:flex xl:gap-3'>
        <div className='space-y-2'>
          <Image
            src={i.image}
            alt={i.name}
            width={68}
            height={68}
            className='overflow-hidden rounded-md'
          />
          <p className='text-[13px]/[16.9px]'>{`${field.value} x ${i.price}₴`}</p>
        </div>

        <div className='flex flex-1 flex-col justify-between'>
          <div className='space-y-2'>
            <FormLabel className='inline-block text-sm/[18.2px] font-semibold'>
              {i.name.charAt(0).toUpperCase() + i.name.slice(1)}
            </FormLabel>
            <p className='text-[13px]/[16.9px]'>{`${i.weight} г`}</p>
          </div>

          <div className='flex items-center gap-2'>
            <button
              disabled={form.getValues(i.name) === 0}
              type='button'
              onClick={onDecrement}
              className='flex size-[26px] items-center justify-center rounded-md border border-black/5 text-sm/[18.2px] font-medium'
            >
              -
            </button>
            <FormControl>
              <Input
                {...field}
                readOnly
                className='flex size-[26px] items-center justify-center rounded-md border border-black/5 p-0 text-center text-sm/[18.2px] font-medium'
              />
            </FormControl>
            <button
              type='button'
              onClick={onIncrement}
              className='flex size-[26px] items-center justify-center rounded-md border border-black/5 text-sm/[18.2px] font-medium'
            >
              +
            </button>
          </div>
        </div>

        <FormMessage />
      </FormItem> */}
    </>
  )
}
