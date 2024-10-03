'use client'

import { useCallback } from 'react'
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
import { IngredientFormItem } from './ingredient-fom-item'

export const IngredientForm = ({
  data,
  dish,
}: {
  data: Ingredient[]
  dish: Dish
}) => {
  const { addToCart, toggleCartDrawer } = useCartStore(state => state)
  const FormSchema = generateFormSchema(data)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: generateFormValues(data),
  })

  const onSubmit = useCallback(
    (formData: z.infer<typeof FormSchema>) => {
      const ingredients = data.reduce((acc: CartIngredient[], i) => {
        if (formData[i.name] > 0) {
          acc.push({ ...i, count: formData[i.name] })
        }
        return acc
      }, [] as CartIngredient[])
      addToCart({ dish, ingredients })
      toggleCartDrawer()
    },
    [data, addToCart, toggleCartDrawer, dish],
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='md:flex md:flex-row-reverse md:gap-6 xl:gap-10'
      >
        <div className='xl:flex-1 xl:space-y-[60px]'>
          <ul className='mb-5 grid grid-cols-2 gap-x-8 gap-y-4 md:flex-1 md:grid-cols-3 md:gap-4'>
            {data.map(i => (
              <li key={i.id}>
                <FormField
                  control={form.control}
                  name={i.name}
                  render={({ field }) => (
                    <IngredientFormItem i={i} field={field} form={form} />
                  )}
                />
              </li>
            ))}
          </ul>
          <div className='hidden xl:flex xl:justify-between'>
            <button
              type='button'
              onClick={() => form.reset()}
              className={cn('btn-secondary', 'w-[260px]')}
            >
              Очистити
            </button>
            <button type='submit' className={cn('btn-primary', 'w-[260px]')}>
              До кошика
            </button>
          </div>
        </div>

        <div className='space-y-6 md:space-y-9'>
          <DishCard dish={dish} />

          <div className='space-y-6 xl:hidden'>
            <button
              type='button'
              onClick={() => form.reset()}
              className={cn('btn-secondary')}
            >
              Очистити
            </button>
            <button type='submit' className={cn('btn-primary')}>
              До кошика
            </button>
          </div>
        </div>
      </form>
    </Form>
  )
}
