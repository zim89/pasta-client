'use client'

import { useCallback, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCartStore, type CartIngredient } from '@/entities/cart'
import type { Dish } from '@/entities/dish'
import type { Ingredient } from '@/entities/ingredient'
import { Form, FormField } from '@/shared/ui/common/form'
import { ScrollArea } from '@/shared/ui/common/scroll-area'
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
      addToCart({ dish, ingredients })
      toggleCartDrawer()
    },
    [data, addToCart, toggleCartDrawer, dish],
  )

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
                До кошика
              </button>
            </div>
          </ScrollArea>
        </div>

        <div className='space-y-6 md:space-y-9'>
          <DishCard dish={dish} price={price} />

          <div className='space-y-6 xl:hidden'>
            <button
              type='button'
              onClick={onClear}
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
