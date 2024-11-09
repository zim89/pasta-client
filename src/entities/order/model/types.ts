import type { Dish } from '@/entities/dish'
import { Ingredient } from '@/entities/ingredient'

export type OrderItem = {
  dish: {
    id: number
    title: Dish['title']
    weight: Dish['weight']
    volume: Dish['volume']
    composition: Dish['composition']
    price: Dish['price']
    image: Dish['image']
    type: Dish['type']
    isNew: Dish['isNew']
  }
  orderItemIngredients: { id: Ingredient['id']; quantity: number }[]
}

type DeliveryAddress = {
  id: number
  city: string
  street: string
  buildingNumber: string | number
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

export type CreateOrder = {
  items: {
    dishId: number
    ingridients: {
      ingridientId: number
      quanttity: number
    }[]
  }[]
  pickup: boolean
  deliveryDetails: Omit<DeliveryAddress, 'id'>
  orderDetails: Omit<OrderDetail, 'id'>
}
