import { CLOSING_HOUR, OPENING_HOUR } from '@/shared/constants'

interface Timeframe {
  label: string
  value: string
}

export const calculateDays = (): Timeframe[] => {
  const today = new Date()
  const result = [{ value: 'today', label: 'Сьогодні' }]

  ;[1, 2, 3, 4, 5, 6, 7].forEach(day => {
    const date = new Date(today)
    date.setDate(today.getDate() + day)

    const parsed = `${date.toLocaleString('ua-UA', {
      dateStyle: 'short',
    })} - ${date.toLocaleString('ua-UA', {
      weekday: 'short',
    })}`

    result.push({
      label: parsed,
      value: parsed,
    })
  })

  return result
}

export type TimeString = `${number}.${number}.${number} - ${string}`

export const isItTimeString = (value: string): value is TimeString => {
  const split = value.split(' - ')

  // dot (.) or slash (/), in other words: British time or Ukrainian one
  const [day, month, year] = split[0].split(/[\./]/)

  return (
    Number.isInteger(+day) &&
    Number.isInteger(+month) &&
    Number.isInteger(+year) &&
    !!split[1]
  )
}

export const calculateTime = (date?: TimeString): Timeframe[] => {
  const currentDate = new Date()
  if (date) {
    const dateParts = date.split(' - ')[0].split(/[\./]/)

    const day = parseInt(dateParts[0], 10)
    const month = parseInt(dateParts[1], 10) - 1 // Months are 0-indexed in JavaScript
    const year = parseInt(dateParts[2], 10)

    currentDate.setDate(day)
    currentDate.setMonth(month)
    // year has a two-digits format, ex. 24
    currentDate.setFullYear(year + 2000)
    currentDate.setHours(OPENING_HOUR)
    currentDate.setMinutes(0)
    currentDate.setSeconds(0)
  }

  const result: Timeframe[] = []

  let currentHour = currentDate.getHours()
  let currentMinute = Math.ceil(currentDate.getMinutes() / 10) * 10

  while (currentHour < CLOSING_HOUR) {
    if (currentMinute >= 60) {
      currentMinute = 0
      currentHour += 1
    }

    if (currentHour >= 24) {
      currentHour = 0
    }

    const currentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`

    result.push({ label: currentTime, value: currentTime })

    currentMinute += 30
  }

  return result
}

export const getAvailableTimeWindow = (timeframes: Timeframe[]) => {
  const availableTimeWindow = timeframes.slice(2)

  return availableTimeWindow.length > 0
    ? availableTimeWindow
    : [
        {
          label: 'Неможливо обробити замовлення в даний час.',
          value: 'UNAVAILABLE',
        },
      ]
}
