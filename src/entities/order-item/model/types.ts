import type { Dish } from '@/entities/dish'

export type OrderItem = {
  id: number
  quantity: number
  image: Dish['image']
  title: Dish['title']
  price: Dish['price']
}
