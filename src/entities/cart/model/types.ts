import type { Dish } from '@/entities/dish'
import type { Ingredient } from '@/entities/ingredient'

export type CartIngredient = Ingredient & { count: number }

export interface CartItem {
  id: string
  dish: Dish
  ingredients: CartIngredient[]
  count: number
  price: number
}

export interface CartItemPayload {
  dish: Dish
  ingredients: CartIngredient[]
}
