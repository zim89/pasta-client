import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { paginationItemsLimit } from '@/config/appConfig'

export const usePaginate = <T = any>(allItems: T[]) => {
  const [paginated, setPaginated] = useState<T[]>([])
  const params = useSearchParams()
  const page = parseInt(params.get('page') || '1')

  useEffect(() => {
    if (page === 1) {
      setPaginated(allItems.slice(0, paginationItemsLimit))
    } else {
      const startingIndex = paginationItemsLimit * page - 1
      setPaginated(
        allItems.slice(startingIndex, startingIndex + paginationItemsLimit)
      )
    }
  }, [allItems, page])

  return [page, { paginated, setPaginated, params }] as const
}
