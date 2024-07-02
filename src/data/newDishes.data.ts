import { CSSProperties } from 'react'
import newDish_1 from '@/assets/images/newDish_1.jpg'
import newDish_2 from '@/assets/images/newDish_2.jpg'
import newDish_3 from '@/assets/images/newDish_3.jpg'

export type NewDish = {
  productId: number
  poster: string
  price: number
  name: string
  mass: number
  additionalStyles?: CSSProperties
}

export const newDishes: NewDish[] = [
  {
    productId: 1,
    poster: newDish_1.src,
    price: 250,
    name: 'Карбонара з телятиною та овочами',
    mass: 340,
    additionalStyles: {
      objectPosition: '-4em 0em'
    }
  },
  {
    productId: 2,
    poster: newDish_2.src,
    price: 250,
    name: 'Карбонара з телятиною та овочами',
    mass: 340,
    additionalStyles: {
      objectPosition: '-3.8em 0em'
    }
  },
  {
    productId: 3,
    poster: newDish_3.src,
    price: 250,
    name: 'Карбонара з телятиною та овочами',
    mass: 340,
    additionalStyles: {
      objectPosition: '-2.4em 0em'
    }
  }
]
