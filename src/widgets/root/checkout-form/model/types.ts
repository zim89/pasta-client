import { FormikProps } from 'formik'

import { Dish } from '@/entities/dish'

export type OrderItem = {
  id: number
  quantity: number
  image: Dish['image']
  title: Dish['title']
  price: Dish['price']
}

export type FormValues = {
  city: string
  street: string
  buildingNumber: string
  entrance: string
  appartmentHouse: string
  story: string
  intercom: string
  orderItems: OrderItem[]
}

export type OrderForm = FormikProps<FormValues>
