export type Dish = {
  id: number
  title: string
  weight: number | null
  volume: number
  composition: null | string
  price: number
  image: string
  type: string
  isHit: boolean
  isNew: boolean
}

export type Ingredient = {
  id: number
  name: string
  price: number
  image: string | null
}

export interface HitsAndNewsResponse {
  hits: Dish[]
  news: Dish[]
}
