import { Dish } from '@/data/menu.data'

export const initIngredients = (ingredients: Dish['ingredients'][number][]) => {
  return ingredients.reduce<{ [P in string]: number }>((acc, curr) => {
    acc[curr.name] = 0
    return acc
  }, {})
}
