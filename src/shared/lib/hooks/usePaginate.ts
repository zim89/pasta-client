import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { PAGINATION_LIMIT } from '@/shared/constants/app.const'
import { useMedia } from './useMedia'

export const usePaginate = <T>(
  allItems: T[],
  page?: number,
  perPage = PAGINATION_LIMIT,
) => {
  const [limit, setLimit] = useState(perPage)
  const [paginated, setPaginated] = useState<T[]>([])
  const params = useSearchParams()
  const [currentPage, setCurrentPage] = useState(
    page || parseInt(params.get('page') || '1'),
  )
  const { isMobileScreen } = useMedia()

  const items = useMemo(() => allItems, [allItems])

  useEffect(() => {
    if (isMobileScreen) return

    if (currentPage === 1) {
      setPaginated(items.slice(0, perPage))
    } else {
      const startingIndex = perPage * (currentPage - 1)
      setPaginated(items.slice(startingIndex, startingIndex + perPage))
    }
  }, [items, currentPage, isMobileScreen, limit])

  useEffect(() => {
    setPaginated(items.slice(0, limit))
    setCurrentPage(1)
  }, [limit])

  return [
    currentPage,
    { paginated, setPaginated, params, setLimit, setCurrentPage },
  ] as const
}
