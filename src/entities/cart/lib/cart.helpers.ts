import type { CartIngredient, CartItem } from '../model'

export const calculateIngredientsPrice = (ingredients: CartIngredient[]) => {
  const ingredientsPrice = ingredients.reduce((acc, i) => {
    return acc + i.price * i.count
  }, 0)

  return ingredientsPrice
}

export const calculateCartPrice = (cart: CartItem[]) => {
  return cart.reduce((acc, item) => {
    return acc + item.price
  }, 0)
}

export const calculateCartCount = (cart: CartItem[]) => {
  return cart.reduce((acc, item) => {
    return acc + item.count
  }, 0)
}
