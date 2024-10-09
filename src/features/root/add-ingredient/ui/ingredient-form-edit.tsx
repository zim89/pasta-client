'use client'

import { useCallback, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  useCartStore,
  type CartIngredient,
  type CartItem,
} from '@/entities/cart'
import type { Ingredient } from '@/entities/ingredient'
import { Form, FormField } from '@/shared/ui/common/form'
import { ScrollArea } from '@/shared/ui/common/scroll-area'
import { cn } from '@/shared/lib/utils'
import { generateFormSchema, generateFormValuesEdit } from '../lib'
import { DishCard } from './dish-card'
import { IngredientFormItem } from './ingredient-fom-item'

export const IngredientFormEdit = ({
  data,
  item,
  setOpen,
}: {
  data: Ingredient[]
  item: CartItem
  setOpen: (open: boolean) => void
}) => {
  const { editIngredients } = useCartStore(state => state)
  const FormSchema = generateFormSchema(data)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: generateFormValuesEdit(data, item.ingredients),
  })

  const onSubmit = useCallback(
    (formData: z.infer<typeof FormSchema>) => {
      const ingredients = data.reduce((acc: CartIngredient[], i) => {
        if (formData[i.name] > 0) {
          acc.push({ ...i, count: formData[i.name] })
        }
        return acc
      }, [] as CartIngredient[])

      editIngredients(item.id, ingredients as CartIngredient[])
      setOpen(false)
    },

    [data, editIngredients, item.id],
  )

  const [price, setPrice] = useState(item.price)
  const onClear = () => {
    setPrice(item.price)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col md:flex-row-reverse md:gap-6 xl:gap-10'
      >
        <div className='relative mb-5 h-full flex-1 xl:m-0 xl:h-[633px]'>
          <ScrollArea type='scroll' className='!absolute inset-0 pr-2'>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-4 md:flex-1 md:grid-cols-3 md:gap-4'>
              {data.map(i => (
                <li key={i.id}>
                  <FormField
                    control={form.control}
                    name={i.name}
                    render={({ field }) => (
                      <IngredientFormItem
                        i={i}
                        field={field}
                        form={form}
                        setPrice={setPrice}
                      />
                    )}
                  />
                </li>
              ))}
            </ul>
            <div className='hidden xl:mt-[60px] xl:flex xl:justify-between'>
              <button
                type='button'
                onClick={onClear}
                className={cn('btn-secondary', 'w-[260px]')}
              >
                Очистити
              </button>
              <button type='submit' className={cn('btn-primary', 'w-[260px]')}>
                Зберегти
              </button>
            </div>
          </ScrollArea>
        </div>

        <div className='space-y-6 md:space-y-9'>
          <DishCard dish={item.dish} price={price} />

          <div className='space-y-6 xl:hidden'>
            <button
              type='button'
              onClick={onClear}
              className={cn('btn-secondary')}
            >
              Очистити
            </button>
            <button type='submit' className={cn('btn-primary')}>
              Зберегти
            </button>
          </div>
        </div>
      </form>
    </Form>
  )
}
