import { Dish } from '../model'

export const formatMass = (grams: number) => {
  if (grams < 1000) {
    return `${grams} г`
  } else {
    return `${grams / 1000} кг`
  }
}

export const formatVolume = (volume: number) => {
  return `${volume} л`
}
export const isDrink = (dish: Dish) => {
  return dish.category.name.toLowerCase() === 'напої'
}

export const formatMeasurement = (dish: Dish) => {
  return (isDrink(dish) ? "Об'єм: " : 'Вага: ').concat(
    !isDrink(dish)
      ? dish.weight
        ? formatMass(dish.weight)
        : 'не визначено'
      : dish.volume
        ? formatVolume(dish.volume)
        : 'не визначено',
  )
}
