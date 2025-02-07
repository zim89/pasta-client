'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ImageField,
  List,
  ListBase,
  TextField,
  useGetList,
  WithRecord,
} from 'react-admin'

import { DishHeaderActions } from '@/widgets/admin/dish-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteDishes } from '@/features/admin/bulk-delete-dishes'
import { Dish } from '@/entities/dish/model/types'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useListPagination } from '@/shared/lib/hooks/useListPagination'
import { useMedia } from '@/shared/lib/hooks/useMedia'

export const ProductList = () => {
  const router = useRouter()
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('dish')
  const [displayedRows, setDisplayedRows] = useState<Dish[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] =
    useListPagination(displayedRows, Number(pageParam), Number(limitParam))

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
            <EntitiesGrid
              displayedRows={rows}
              bulkActions={<BulkDeleteDishes />}
            >
              <ImageField
                source='image'
                cellClassName='size-8 object-contain'
                sortable={false}
                label='Фото'
              />
              <TextField source='title' label='Назва' />
              <TextField source='category.name' sortable={false} label='Тип' />
              <TextField
                source='composition'
                sortable={false}
                label='Композиція'
              />
              <TextField source='price' label='Ціна' />
              <WithRecord
                label="Вага/Об'єм"
                render={record => (
                  <span>
                    {/* Drink category: 13 */}
                    {record.category.id === 13
                      ? record.volume
                        ? `${record.volume} л`
                        : 'N/A'
                      : record.weight
                        ? `${record.weight} гр`
                        : 'N/A'}
                  </span>
                )}
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
          <EntitiesGrid
            displayedRows={paginated}
            bulkActions={<BulkDeleteDishes />}
          >
            <ImageField
              source='image'
              cellClassName='size-8 object-contain'
              sortable={false}
              label='Фото'
            />
            <TextField source='title' label='Назва' />
            <TextField source='category.name' sortable={false} label='Тип' />
            <TextField
              source='composition'
              sortable={false}
              label='Композиція'
            />
            <TextField source='price' label='Ціна (₴)' />
            <WithRecord
              label="Вага/Об'єм"
              render={record => (
                <span>
                  {/* Drink category: 13 */}
                  {record.category.id === 13
                    ? record.volume
                      ? `${record.volume} л`
                      : 'N/A'
                    : record.weight
                      ? `${record.weight} гр`
                      : 'N/A'}
                </span>
              )}
            />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
