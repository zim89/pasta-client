'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Datagrid,
  fetchUtils,
  ImageField,
  List,
  ListBase,
  TextField,
  useGetList,
} from 'react-admin'

import { AdvantageHeaderActions } from '@/widgets/admin/advantage-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteAdvantages } from '@/features/admin/bulk-delete-advantages/ui'
import { Feature } from '@/entities/feature'
import { SERVER_URL } from '@/shared/constants'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useListPagination } from '@/shared/lib/hooks/useListPagination'
import { useMedia } from '@/shared/lib/hooks/useMedia'

export const AdvantagesList = () => {
  const router = useRouter()
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('our-advantages')
  const [displayedRows, setDisplayedRows] = useState<Feature[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  useEffect(() => {
    ;(async () => {
      const response = await fetchUtils.fetchJson(
        `${SERVER_URL}/auth/refresh-token`,
        {
          method: 'POST',
          credentials: 'include',
        },
      )
      console.log(response.json)
    })()
  }, [])

  const [currentPage, { paginated, setLimit, setCurrentPage }] =
    useListPagination(displayedRows, Number(pageParam), Number(limitParam))

  useEffect(() => {
    router.replace('#/our-advantages?perPage=5&page=1')
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
              <AdvantageHeaderActions />
            </ListBase>
          }
          actions={<AdvantageHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid
              displayedRows={rows}
              bulkActions={<BulkDeleteAdvantages />}
            >
              <ImageField
                source='image'
                cellClassName='size-8 object-contain'
                label='Постер'
              />
              <TextField source='title' label='Найменування' />
              <TextField source='description' label='Опис' />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='p-4'
          empty={
            <ListBase>
              <AdvantageHeaderActions />
            </ListBase>
          }
          actions={<AdvantageHeaderActions />}
          perPage={Number(limitParam)}
        >
          <Datagrid
            data={paginated}
            bulkActionButtons={<BulkDeleteAdvantages />}
          >
            <ImageField
              source='image'
              cellClassName='size-8 object-contain'
              label='Постер'
            />

            <TextField source='title' label='Найменування' />
            <TextField source='description' label='Опис' />
          </Datagrid>
        </List>
      )}
    </>
  )
}
