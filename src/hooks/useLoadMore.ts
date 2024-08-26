import { useState } from 'react'
import { itemsPerScreen } from '@/config/appConfig'

export const useLoadMore = <T = any>(allItems: T[]) => {
  const [expansionCount, setExpansionCount] = useState(1)
  const expandedItems = allItems.slice(0, itemsPerScreen * expansionCount)

  return { expandedItems, expansionCount, setExpansionCount }
}
