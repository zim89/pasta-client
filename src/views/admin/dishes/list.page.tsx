'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ImageField, List, ListBase, TextField, useGetList } from 'react-admin'

import { DishHeaderActions } from '@/widgets/admin/dish-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { Dish } from '@/entities/dish/model/types'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'

export const ProductList = () => {
  const router = useRouter()
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('dish')
  const [displayedRows, setDisplayedRows] = useState<Dish[]>(data || [])

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
    router.replace('#/dish?perPage=5&page=1')
  }, [])

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
      setLimit(Number(limitParam))
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
          actions={<DishHeaderActions />}
          empty={
            <ListBase>
              <DishHeaderActions />
            </ListBase>
          }
          displayedRows={displayedRows}
          renderGrid={rows => (
            <EntitiesGrid displayedRows={rows}>
              <ImageField
                source='image'
                cellClassName='size-8 object-contain'
                sortable={false}
                label='Фото'
              />
              <TextField source='title' label='Назва' />
              <TextField source='type' sortable={false} label='Тип' />
              <TextField
                source='composition'
                sortable={false}
                label='Композиція'
              />
              <TextField source='price' label='Ціна' />
              <TextField source='weight' sortable={false} label='Вага' />
              <TextField
                source='weight'
                sortable={false}
                label='Вага'
                emptyText='Не визначено'
              />
              <TextField
                source='volume'
                sortable={false}
                label="Об'єм"
                emptyText='Не визначено'
              />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='p-4'
          actions={<DishHeaderActions />}
          empty={
            <ListBase>
              <DishHeaderActions />
            </ListBase>
          }
          perPage={Number(limitParam)}
        >
          <EntitiesGrid displayedRows={paginated}>
            <ImageField
              source='image'
              cellClassName='size-8 object-contain'
              sortable={false}
              label='Фото'
            />
            <TextField source='title' label='Назва' />
            <TextField source='type' sortable={false} label='Тип' />
            <TextField
              source='composition'
              sortable={false}
              label='Композиція'
            />
            <TextField source='price' label='Ціна (₴)' />
            <TextField
              source='weight'
              sortable={false}
              label='Вага (грам)'
              emptyText='Не визначено'
              cellClassName='!font-inter'
            />
            <TextField
              source='volume'
              sortable={false}
              label="Об'єм (л)"
              emptyText='Не визначено'
            />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
