import { Dish } from '@/data/menu.data'

export const initIngredients = (ingredients: Dish['ingredients'][number][]) => {
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
