import { z } from 'zod'

import type { CartIngredient } from '@/entities/cart'
import type { Ingredient } from '@/entities/ingredient'

export const generateFormSchema = (data: Ingredient[]) => {
  const formSchema = data.reduce(
    (acc, item) => {
      acc[item.name] = z
        .number()
        .int({
          message: 'Value must be an integer',
        })
        .nonnegative({
          message: 'Value must be >= 0.',
        })
      return acc
    },
    {} as Record<string, ReturnType<typeof z.number>>,
  )

  return z.object(formSchema)
}

export const generateFormValues = (data: Ingredient[]) => {
  const formValues = data.reduce(
    (acc, item) => {
      acc[item.name] = 0
      return acc
    },
    {} as Record<string, number>,
  )

  return formValues
}

export const generateFormValuesEdit = (
  data: Ingredient[],
  ingredients: CartIngredient[],
) => {
  const formValues = data.reduce(
    (acc, item) => {
      const ingredient = ingredients.find(i => i.id === item.id)
      acc[item.name] = ingredient ? ingredient.count : 0
      return acc
    },
    {} as Record<string, number>,
  )

  return formValues
}
