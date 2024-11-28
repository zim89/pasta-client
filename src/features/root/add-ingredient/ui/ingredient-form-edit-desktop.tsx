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
import { cn } from '@/shared/lib/utils'
import { generateFormSchema, generateFormValuesEdit } from '../lib'
import { DishCard } from './dish-card'
import { IngredientFormItem } from './ingredient-form-item'

export const IngredientFormEditDesktop = ({
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

    [data, editIngredients, item.id, setOpen],
  )

  const [price, setPrice] = useState(item.price)
  const onClear = () => {
    setPrice(item.price)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-[50px]'>
        <div>
          <DishCard dish={item.dish} price={price} />
        </div>

        <div className='flex-1 space-y-8'>
          <ul className='grid grid-cols-3 gap-[42px]'>
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
              Зберегти
            </button>
          </div>
        </div>
      </form>
    </Form>
  )
}
