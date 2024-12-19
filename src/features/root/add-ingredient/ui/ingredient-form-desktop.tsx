'use client'

import { useCallback, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCartStore, type CartIngredient } from '@/entities/cart'
import type { Dish } from '@/entities/dish'
import type { Ingredient } from '@/entities/ingredient'
import { Form, FormField } from '@/shared/ui/common/form'
import { cn } from '@/shared/lib/utils'
import { generateFormSchema, generateFormValues } from '../lib'
import { DishCard } from './dish-card'
import { IngredientFormItem } from './ingredient-form-item'

export const IngredientFormDesktop = ({
  data,
  dish,
  count = 1,
  setOpen,
}: {
  data: Ingredient[]
  dish: Dish
  count?: number
  setOpen: (value: boolean) => void
}) => {
  const { addToCart } = useCartStore(state => state)
  const FormSchema = generateFormSchema(data)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: generateFormValues(data),
  })

  const [price, setPrice] = useState(dish.price)

  const onClear = () => {
    setPrice(dish.price)
    form.reset()
  }

  const onSubmit = useCallback(
    (formData: z.infer<typeof FormSchema>) => {
      const ingredients = data.reduce((acc: CartIngredient[], i) => {
        if (formData[i.name] > 0) {
          acc.push({ ...i, count: formData[i.name] })
        }
        return acc
      }, [] as CartIngredient[])
      addToCart({ dish, ingredients, count })
      setOpen(false)
    },
    [data, addToCart, dish, count, setOpen],
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-[50px]'>
        <div>
          <DishCard dish={dish} price={price * count} />
        </div>

        <div className='flex-1 space-y-8'>
          <ul className='grid grid-cols-3 gap-[42px] border-b border-b-primary-light pb-8'>
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
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={onClear}
              className={cn('btn-secondary', 'w-[260px]')}
            >
              Очистити
            </button>
            <button type='submit' className={cn('btn-primary', 'w-[260px]')}>
              До кошика
            </button>
          </div>
        </div>
      </form>
    </Form>
  )
}
