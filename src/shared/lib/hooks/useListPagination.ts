import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import { PAGINATION_LIMIT } from '@/shared/constants/app.const'
import { useHashParamValue } from './useHashValues'
import { useMedia } from './useMedia'

type Props<T> = {
  allRows: T[]
  resource: string
}

export const useListPagination = <T>({ allRows, resource }: Props<T>) => {
  const router = useRouter()
  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')

  const [paginatedRows, setPaginated] = useState<T[]>([])
  const [currentPage, setCurrentPage] = useState(Number(pageParam) || 1)
  const [limit, setLimit] = useState(Number(limitParam) || PAGINATION_LIMIT)
  const { isMobileScreen } = useMedia()

  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const generateURLString = useCallback(
    (page: number, limit: number) => {
      const otherParams = [
        sortParam && `sort=${sortParam}`,
        orderParam && `order=${orderParam}`,
      ].filter(param => !!param)

      return `#/${resource}?page=${page}&perPage=${limit}${otherParams.length > 0 ? '&' + otherParams.join('&') : ''}`
    },
    [sortParam, orderParam, resource],
  )

  const items = useMemo(() => allRows, [allRows])

  useEffect(() => {
    if (currentPage) {
      const url = generateURLString(currentPage, limit)
      router.replace(url)
    }
  }, [currentPage, limit])

  useEffect(() => {
    if (isMobileScreen) return

    if (currentPage === 1) {
      setPaginated(items.slice(0, limit))
    } else {
      const startingIndex = limit * (currentPage - 1)
      setPaginated(items.slice(startingIndex, startingIndex + limit))
    }
  }, [items, currentPage, isMobileScreen, limit])

  useEffect(() => {
    setPaginated(items.slice(0, limit))
    setCurrentPage(1)
  }, [limit, items])

  return [
    currentPage,
    { paginatedRows, limit, setPaginated, setLimit, setCurrentPage },
  ] as const
}
