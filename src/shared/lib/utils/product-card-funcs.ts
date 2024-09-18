import { Ingredient } from '@/entities/ingredient/model/types'

export const initIngredients = (ingredients: Ingredient[]) => {
  return ingredients.reduce<{
    [P in string]: {
      count: number
      price: number
    }
  }>((acc, curr) => {
    acc[curr.name] = {
      count: 0,
      price: curr.price
    }

    return acc
  }, {})
}
