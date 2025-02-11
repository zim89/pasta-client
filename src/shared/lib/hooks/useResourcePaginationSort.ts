'use client'

import { useEffect, useState } from 'react'
import { useGetList } from 'react-admin'

import { useHashParamValue, useListPagination } from '@/shared/lib/hooks'

type Props = {
  resource: string
}

export const useResourcePaginationSortController = <T = unknown>({
  resource,
}: Props) => {
  const { data } = useGetList(resource)
  const [displayedRows, setDisplayedRows] = useState<T[]>(data || [])

  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginatedRows, setLimit, limit, setCurrentPage }] =
    useListPagination({
      allRows: displayedRows,
      resource,
    })

  useEffect(() => {
    setLimit(5)
    setCurrentPage(1)
  }, [resource])

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof T

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

  return {
    paginatedRows,
    currentPage,
    limitParam: limit,
    sortParam,
    orderParam,
    setCurrentPage,
    setLimit,
    allRows: displayedRows,
  }
}
