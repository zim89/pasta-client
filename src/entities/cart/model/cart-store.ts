import deepEqual from 'deep-equal'
import { nanoid } from 'nanoid'
import { createStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { KEYS } from '@/shared/constants'
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
  clearCart: () => void
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
              (newItem.dish.price +
                calculateIngredientsPrice(newItem.ingredients)) *
              newItem.count

            const candidate = cart.find(
              item =>
                // If the dish is the same
                item.dish.id === newItem.dish.id &&
                // And its ingredient set
                deepEqual(item.ingredients, newItem.ingredients),
            )

            // If a dish with the same ingredients' set as newcoming dish is already in the cart, then just increase its quantity and price
            if (candidate) {
              const updatedCart = cart.map(item =>
                // If the same dish
                item.dish.id === candidate.dish.id &&
                // With the same ingredient set
                deepEqual(item.ingredients, newItem.ingredients)
                  ? {
                      ...item,
                      count: item.count + newItem.count,
                      price:
                        item.price +
                        (item.dish.price +
                          calculateIngredientsPrice(item.ingredients)) *
                          newItem.count,
                    }
                  : item,
              )

              set(() => ({
                cart: updatedCart,
                totalCount: calculateCartCount(updatedCart),
                totalPrice: calculateCartPrice(updatedCart),
              }))

              // If there is no dish in the cart with the same ingredients' set as newcoming dish, then just add a new entry to the cart
            } else {
              const updatedCart = [
                {
                  id: nanoid(),
                  ...newItem,
                  count: newItem.count,
                  price: newItemPrice,
                },
                ...cart,
              ]

              set(() => ({
                cart: updatedCart,
                totalCount: calculateCartCount(updatedCart),
                totalPrice: calculateCartPrice(updatedCart),
              }))
            }
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
          clearCart: () => {
            set(() => defaultInitState)
          },
        }),
        { name: KEYS.cartStorage },
      ),
    ),
  )
}
