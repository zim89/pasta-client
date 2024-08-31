import { Dish } from '@/types/dish.types'
import { ReadonlyURLSearchParams } from 'next/navigation'

export const removeParam = (
  pageParams: ReadonlyURLSearchParams,
  key: string
) => {
  const newParams = new URLSearchParams(pageParams)
  newParams.delete(key)
  return '?' + newParams.toString()
}

export const sortDishes = (raw: Dish[], sortValue: string) => {
  if (!raw.length) return []

  switch (sortValue) {
    case 'За популярністю':
      return raw.sort((a, b) => (a.isHit > b.isHit ? -1 : 1))

    case 'За спаданням ціни':
      return raw.sort((a, b) => (a.price < b.price ? 1 : -1))

    case 'За зростанням ціни':
      return raw.sort((a, b) => (a.price < b.price ? -1 : 1))
    default:
      return raw
  }
}
