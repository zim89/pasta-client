export interface Dish {
  id: number
  slug: string
  title: string
  weight: number
  volume: number | null
  composition: string
  price: number
  image: string
  type: string
  isHit: boolean
  isNew: boolean
}

export interface HitsAndNewsResponse {
  hits: Dish[]
  news: Dish[]
}
