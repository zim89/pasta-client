export const initIngredients = (ingredients: string[]) => {
  return ingredients.reduce<{ [P in string]: number }>((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {})
}
