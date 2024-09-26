'use client'

import { useEffect, useState } from 'react'
import { Datagrid, ImageField, List, TextField, useGetList } from 'react-admin'

import { AdvantageHeaderActions } from '@/widgets/admin/advantage-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { Feature } from '@/entities/feature'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'

export const AdvantagesList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('our-advantages')
  const [displayedRows, setDisplayedRows] = useState<Feature[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] = usePaginate(
    displayedRows,
    Number(pageParam),
    Number(limitParam),
  )

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
      setLimit(5)
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
          actions={<AdvantageHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid displayedRows={rows}>
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
        <List className='p-4' actions={<AdvantageHeaderActions />}>
          <Datagrid data={paginated}>
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
