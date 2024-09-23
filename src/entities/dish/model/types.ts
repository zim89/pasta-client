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
  customizable: boolean
  orderCount: number
}

export interface HitsAndNewsResponse {
  hits: Dish[]
  news: Dish[]
}
