import { nanoid } from 'nanoid'
import { createStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import {
  calculateCartCount,
  calculateCartPrice,
  calculateIngredientsPrice,
} from '../lib'
import type { CartIngredient, CartItem, CartItemPayload } from './types'

export type CartState = {
  cart: CartItem[]
  opened: boolean
  totalCount: number
  totalPrice: number
}

export type CartActions = {
  toggleCartDrawer: () => void
  addToCart: (newItem: CartItemPayload) => void
  removeFromCart: (id: string) => void
  incrementItem: (id: string) => void
  decrementItem: (id: string) => void
  editIngredients: (id: string, ingredients: CartIngredient[]) => void
}

export type CartStore = CartState & CartActions

export const initCartStore = (): CartState => {
  return { cart: [], opened: false, totalCount: 0, totalPrice: 0 }
}

export const defaultInitState: CartState = {
  cart: [],
  opened: false,
  totalCount: 0,
  totalPrice: 0,
}

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()(
    devtools(
      persist(
        (set, get) => ({
          ...initState,
          toggleCartDrawer: () => set(state => ({ opened: !state.opened })),
          addToCart: newItem => {
            const cart = get().cart
            const newItemPrice =
              newItem.dish.price +
              calculateIngredientsPrice(newItem.ingredients)
            const updatedCart = [
              {
                id: nanoid(),
                ...newItem,
                count: 1,
                price: newItemPrice,
              },
              ...cart,
            ]

            set(() => ({
              cart: updatedCart,
              totalCount: calculateCartCount(updatedCart),
              totalPrice: calculateCartPrice(updatedCart),
            }))
          },
          removeFromCart: id => {
            const cart = get().cart
            const item = cart.find(item => item.id === id)

            if (item) {
              const updatedCart = cart.filter(item => item.id !== id)

              set(() => ({
                cart: updatedCart,
                totalCount: calculateCartCount(updatedCart),
                totalPrice: calculateCartPrice(updatedCart),
              }))
            }
          },
          incrementItem: id => {
            const cart = get().cart
            const item = cart.find(item => item.id === id)

            if (item) {
              const updatedCart = cart.map(item =>
                item.id === id
                  ? {
                      ...item,
                      count: item.count + 1,
                      price:
                        item.price +
                        item.dish.price +
                        calculateIngredientsPrice(item.ingredients),
                    }
                  : item,
              )

              set(() => ({
                cart: updatedCart,
                totalCount: calculateCartCount(updatedCart),
                totalPrice: calculateCartPrice(updatedCart),
              }))
            }
          },
          decrementItem: id => {
            const cart = get().cart
            const item = cart.find(item => item.id === id)

            if (item && item.count === 1) return

            if (item) {
              const updatedCart = cart.map(item =>
                item.id === id
                  ? {
                      ...item,
                      count: item.count - 1,
                      price:
                        item.price -
                        (item.dish.price +
                          calculateIngredientsPrice(item.ingredients)),
                    }
                  : item,
              )

              set(() => ({
                cart: updatedCart,
                totalCount: calculateCartCount(updatedCart),
                totalPrice: calculateCartPrice(updatedCart),
              }))
            }
          },
          editIngredients: (id, ingredients) => {
            const cart = get().cart
            const item = cart.find(item => item.id === id)

            if (item) {
              const updatedCart = cart.map(item =>
                item.id === id
                  ? {
                      ...item,
                      ingredients,
                      price:
                        item.dish.price * item.count +
                        item.count * calculateIngredientsPrice(ingredients),
                    }
                  : item,
              )

              set(() => ({
                cart: updatedCart,
                totalPrice: calculateCartPrice(updatedCart),
              }))
            }
          },
        }),
        { name: 'cart-storage' },
      ),
    ),
  )
}
