import { Dish } from './dish.types'

type OrderItem = {
  id: number
  dish: Dish
  orderItemIngredients: { id: number; quantity: number }[]
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
