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

export const formatMeasurement = (dish: Dish) => {
  return (dish.type === 'Напої' ? "Об'єм: " : 'Вага: ').concat(
    dish.type !== 'Напої'
      ? dish.weight
        ? formatMass(dish.weight)
        : 'не визначено'
      : dish.volume
        ? formatVolume(dish.volume)
        : 'не визначено',
  )
}
