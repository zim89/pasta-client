import { maxLength, maxValue, minValue, required } from 'react-admin'

export const requiredField = required("Поле обов'язкове для заповнення")
export const noMoreThan = (length: number) =>
  maxLength(length, `Поле не повинно перевищувати ${length} символів`)
export const valueRange = (min: number, max = Infinity) => {
  return [
    minValue(min, `Значення повинно бути більшим за ${min}`),
    maxValue(max, `Значення повинно бути меншим за ${min}`),
  ]
}
