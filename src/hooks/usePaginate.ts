import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { paginationItemsLimit } from '@/config/appConfig'
import { useMedia } from './useMedia'

export const usePaginate = <T = any>(allItems: T[]) => {
  const [paginated, setPaginated] = useState<T[]>([])
  const params = useSearchParams()
  const page = parseInt(params.get('page') || '1')
  const { isMobileScreen } = useMedia()

  useEffect(() => {
    if (isMobileScreen) return

    if (page === 1) {
      setPaginated(allItems.slice(0, paginationItemsLimit))
    } else {
      const startingIndex = paginationItemsLimit * page - 1
      setPaginated(
        allItems.slice(startingIndex, startingIndex + paginationItemsLimit)
      )
    }
  }, [allItems, page, isMobileScreen])

  return [page, { paginated, setPaginated, params }] as const
}
