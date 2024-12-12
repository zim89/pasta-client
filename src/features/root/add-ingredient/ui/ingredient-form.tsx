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
import { IngredientFormItem } from './ingredient-form-item'

export const IngredientForm = ({
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-rows-[1fr_auto] gap-5 md:gap-8 xl:grid-cols-[240px_1fr] xl:grid-rows-none'
      >
        <div className='relative h-full flex-1 grid-rows-[auto_1fr]'>
          <ScrollArea type='auto' className='!absolute inset-0 pr-3'>
            <ul className='grid grid-cols-2 gap-x-[18px] gap-y-4 md:flex-1 md:grid-cols-3 md:gap-x-4 md:gap-y-11'>
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
          </ScrollArea>
        </div>

        <div className='flex flex-col gap-6 border-t border-t-primary-light pt-4 md:grid-rows-1 md:flex-row md:gap-[59px] md:pt-8'>
          <DishCard dish={dish} price={price * count} />

          <div className='flex-1 space-y-6'>
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
