'use client'

import { useEffect, useState } from 'react'
import {
  ImageField,
  List,
  NumberField,
  TextField,
  useGetList,
} from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { IngredientHeaderActions } from '@/widgets/admin/ingredient-header-actions'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { CreateIngredient } from '@/features/admin/create-ingredient'
import { Ingredient } from '@/entities/ingredient/model/types'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'

export const IngredientList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('ingredient')
  const [displayedRows, setDisplayedRows] = useState<Ingredient[]>(data || [])

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

    const sort = sortParam as keyof Ingredient

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
          actions={<IngredientHeaderActions />}
          empty={<CreateIngredient />}
          renderGrid={rows => (
            <EntitiesGrid displayedRows={rows}>
              <ImageField
                source='image'
                label='Постер'
                cellClassName='size-12 object-contain'
                sortable={false}
              />
              <TextField source='name' label='Найменування' />
              <NumberField source='price' label='Ціна' cellClassName='size-2' />
              <NumberField
                source='weight'
                label='Вага'
                cellClassName='size-2'
              />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='hidden p-4 md:block'
          actions={<IngredientHeaderActions />}
          empty={<CreateIngredient />}
        >
          <EntitiesGrid displayedRows={paginated}>
            <ImageField
              source='image'
              label='Постер'
              cellClassName='size-12 object-contain'
              sortable={false}
            />
            <TextField source='name' label='Найменування' />
            <NumberField source='price' label='Ціна' cellClassName='size-2' />
            <NumberField source='weight' label='Вага' cellClassName='size-2' />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
