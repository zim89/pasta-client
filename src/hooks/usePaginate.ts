import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PAGINATION_LIMIT } from '@/constants/app.const'
import { useMedia } from './useMedia'

export const usePaginate = <T = any>(allItems: T[]) => {
  const [paginated, setPaginated] = useState<T[]>([])
  const params = useSearchParams()
  const page = parseInt(params.get('page') || '1')
  const { isMobileScreen } = useMedia()

  const items = useMemo(() => allItems, [allItems])

  useEffect(() => {
    if (isMobileScreen) return

    if (page === 1) {
      setPaginated(items.slice(0, PAGINATION_LIMIT))
    } else {
      const startingIndex = PAGINATION_LIMIT * page - 1
      setPaginated(items.slice(startingIndex, startingIndex + PAGINATION_LIMIT))
    }
  }, [items, page, isMobileScreen])

  return [page, { paginated, setPaginated, params }] as const
}
