export type Dish = {
  id: number
  title: string
  slug: string
  weight: number | null
  volume: number | null
  composition: null | string
  price: number
  image: string | null
  isNew: boolean
  customizable: boolean
  orderCount: number
  category: {
    id: number
    name: string
  }
}

export interface HitsAndNewsResponse {
  hits: Dish[]
  news: Dish[]
}
