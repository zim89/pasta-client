export type Dish = {
  id: number
  title: string
  slug: string
  weight: number | null
  volume: number | null
  composition: null | string
  price: number
  image: string
  type: string
  isNew: boolean
  customizable: boolean
  orderCount: number
}

export interface HitsAndNewsResponse {
  hits: Dish[]
  news: Dish[]
}
