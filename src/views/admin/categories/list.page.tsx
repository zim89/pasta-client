'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { List, ListBase, TextField, useGetList } from 'react-admin'

import { CategoryHeaderActions } from '@/widgets/admin/category-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteCategories } from '@/features/admin/bulk-delete-categories'
import { Feature } from '@/entities/feature'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useListPagination } from '@/shared/lib/hooks/useListPagination'
import { useMedia } from '@/shared/lib/hooks/useMedia'

export const CategoriesList = () => {
  const router = useRouter()
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('category')
  const [displayedRows, setDisplayedRows] = useState<Feature[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] =
    useListPagination({ allItems: displayedRows, resource: 'category' })

  useEffect(() => {
    router.replace('#/category?perPage=5&page=1')
  }, [])

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Feature

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
      setLimit(Number(limitParam))
    }
  }, [limitParam])

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(Number(pageParam))
    }
  }, [pageParam])

  return (
    <>
      {isMobileScreen ? (
        <MobileEntitiesGrid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          empty={
            <ListBase>
              <CategoryHeaderActions />
            </ListBase>
          }
          actions={<CategoryHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid
              displayedRows={rows}
              bulkActions={<BulkDeleteCategories />}
            >
              <TextField source='id' label='№' />
              <TextField source='name' label='Найменування' />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='p-4'
          empty={
            <ListBase>
              <CategoryHeaderActions />
            </ListBase>
          }
          actions={<CategoryHeaderActions />}
          perPage={Number(limitParam)}
        >
          <EntitiesGrid
            displayedRows={paginated}
            bulkActions={<BulkDeleteCategories />}
          >
            <TextField source='id' label='№' />
            <TextField source='name' label='Найменування' />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
