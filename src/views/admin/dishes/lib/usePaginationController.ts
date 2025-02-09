'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useGetList } from 'react-admin'

import { Dish } from '@/entities/dish'
import { useHashParamValue, useListPagination } from '@/shared/lib/hooks'

type Props = {
  resource: string
}

export const usePaginationController = ({ resource }: Props) => {
  const router = useRouter()
  const { data } = useGetList(resource)
  const [displayedRows, setDisplayedRows] = useState<Dish[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] =
    useListPagination({
      allItems: displayedRows,
      resource: 'dish',
    })

  useEffect(() => {
    router.replace(`#/${resource}?page=1&perPage=5`)
  }, [resource, router])

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Dish

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (orderParam === 'DESC') return b[sort]! < a[sort]! ? -1 : 1
        return a[sort]! < b[sort]! ? -1 : 1
      }),
    ])
  }, [sortParam, orderParam])

  useEffect(() => {
    if (data) {
      setDisplayedRows(data)
    }
  }, [data])

  useEffect(() => {
    if (limitParam) {
      setLimit(Number(limitParam) || 5)
    }
  }, [limitParam])

  return {
    paginated,
    currentPage,
    limitParam: limitParam || '5',
    pageParam,
    sortParam,
    orderParam,
    setCurrentPage,
    setLimit,
    allRows: displayedRows,
  }
}
