import { ReadonlyURLSearchParams } from 'next/navigation'
import { Dish } from '@/entities/dish/model/types'

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

export const translateCategory = (category: string) => {
  switch (category) {
    case 'Pasta':
      return 'Паста'
    case 'Risotto':
      return 'Різoттo'
    case 'Soup':
      return 'Супчики'
    case 'Drink':
      return 'Напої'
    case 'Other':
      return 'Інше'
    default:
      return category
  }
}

export const formatMass = (grams: number) => {
  if (grams < 1000) {
    return `${grams} г`
  } else {
    return `${grams / 1000} кг`
  }
}
