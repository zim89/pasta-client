import { useState } from 'react'
import { PAGINATION_LIMIT_MOBILE } from '@/constants/app.const'

export const useLoadMore = <T = any>(allItems: T[]) => {
  const [expansionCount, setExpansionCount] = useState(1)
  const expandedItems = allItems.slice(
    0,
    PAGINATION_LIMIT_MOBILE * expansionCount
  )

  return { expandedItems, expansionCount, setExpansionCount }
}
