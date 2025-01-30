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
  console.log(dish)

  return (
    dish.category.name.toLocaleLowerCase() === 'напої' ? "Об'єм: " : 'Вага: '
  ).concat(
    dish.category.name !== 'напої'
      ? dish.weight
        ? formatMass(dish.weight)
        : 'не визначено'
      : dish.volume
        ? formatVolume(dish.volume)
        : 'не визначено',
  )
}
