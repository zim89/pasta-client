import { useState } from 'react'

export const useActive = (defaultValue?: string) => {
  const [active, setActive] = useState(defaultValue || '')

  const change = (item: string) => {
    setActive(item)
  }

  return { change, active }
}
