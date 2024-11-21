import { maxLength, minLength, required } from 'react-admin'

export const requiredField = required("Поле є обов'язкове для заповнення.")
export const noMoreThan = (length: number) =>
  maxLength(length, `Поле не повинно перевищувати ${length} символів.`)
export const valueRange = (min: number, max = Infinity) => {
  return [
    minLength(min, `Значення повинно бути більшим за ${min}.`),
    maxLength(max, `Значення повинно бути меншим за ${min}.`),
  ]
}
