import { UseFormReturn } from 'react-hook-form'

import { CartIngredient } from '@/entities/cart'

export type OrderForm = UseFormReturn<
  {
    city: string
    street: string
    buildingNumber: string

    entrance: string
    appartmentHouse: string
    story: string
    intercom: string
    orderItems: {
      id: string
      count: number
      image: string
      title: string
      price: number
      ingredients: CartIngredient[]
    }[]
  },
  any,
  undefined
>
