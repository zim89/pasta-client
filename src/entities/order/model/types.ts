import { CartIngredient } from '@/entities/cart'
import type { Dish } from '@/entities/dish'

export type OrderItem = {
  id: string
  count: number
  image: Dish['image']
  title: Dish['title']
  price: Dish['price']
  ingredients: CartIngredient[]
}

type DeliveryAddress = {
  id: number
  city: string
  street: string
  buildingNumber: number
  entrance?: number
  flatNumber?: number
  floor?: number
  intercomCode?: string
}

type OrderDetail = {
  id: number
  name: string
  phone: string
  email: string
  payType: string
  noChange: boolean
  changeFrom: number
  date: string
  comment?: string
}

export type Order = {
  id: number
  number: string
  totalPrice: number
  pickup: boolean
  orderItems: OrderItem[]
  deliveryAdress: DeliveryAddress
  orderDetail: OrderDetail
}
