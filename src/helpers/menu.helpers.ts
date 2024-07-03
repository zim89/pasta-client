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
