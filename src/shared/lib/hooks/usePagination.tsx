import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

import type { Dish } from '@/entities/dish/model/types'
import { PAGINATION_LIMIT } from '@/shared/constants/app.const'

export const usePagination = (data: Dish[]) => {
  const [paginatedData, setPaginatedData] = useState<Dish[]>(data)
  const [total, setTotal] = useState(0)

  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') ?? '1')
  const filter = searchParams.get('filter') ?? ''
  const sort = searchParams.get('sort') ?? ''
  const isTablet = useMediaQuery('(max-width: 1439px)')

  useEffect(() => {
    let result

    switch (sort) {
      case 'min_price':
        result = [...data].sort((a, b) => a.price - b.price)
        break

      case 'max_price':
        result = [...data].sort((a, b) => b.price - a.price)
        break

      default:
        result = [...data].sort((a, b) => b.orderCount - a.orderCount)
    }

    if (filter) {
      result = result.filter(dish =>
        dish.category.name.toLowerCase().includes(filter.toLowerCase()),
      )
    }

    setTotal(result.length)

    if (isTablet) {
      setPaginatedData(result)
      return
    }

    if (result.length > PAGINATION_LIMIT) {
      const start = PAGINATION_LIMIT * (page - 1)
      const end = start + PAGINATION_LIMIT
      setPaginatedData(result.slice(start, end))
    } else {
      setPaginatedData(result)
    }
  }, [data, page, filter, sort])

  return {
    paginatedData,
    total,
    hasPagination: total > PAGINATION_LIMIT,
  }
}
