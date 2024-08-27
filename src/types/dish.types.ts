export interface HitDishes {
  id: number
  title: string
  weight: number
  price: number
  image: string
  isHit: boolean
  isNew: boolean
}

export interface NewDishes extends HitDishes {
  composition: string
}

export interface HitsAndNewsResponse {
  hits: HitDishes[]
  news: NewDishes[]
}
