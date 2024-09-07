import { useEffect, useState } from 'react'
import { Ingredient } from '@/types/dish.types'
import { PlusCircle } from 'lucide-react'
import {
  ImageField,
  InfiniteList,
  List,
  NumberField,
  TextField,
  useGetList
} from 'react-admin'
import { EntityGrid } from '@/components/entityGrid'
import { HeaderActions } from '@/components/headerActions'
import { MobileGrid } from '@/components/mobileGrid'
import { Button } from '@/components/ui/button'
import { useHashParamValue } from '@/hooks/useHashValues'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'
import { AddIngredient } from './AddIngredient'

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
    Number(limitParam)
  )

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Ingredient

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (orderParam === 'DESC') return b[sort]! < a[sort]! ? -1 : 1
        return a[sort]! < b[sort]! ? -1 : 1
      })
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
        <MobileGrid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          actions={
            <HeaderActions
              title='Каталог інгредієнтів'
              secondaryTitle='Додати інгредієнт'
              buttonProps={{
                text: 'Додати інгредієнт',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddIngredient />}
            </HeaderActions>
          }
          renderGrid={rows => (
            <EntityGrid displayedRows={rows}>
              <ImageField
                source='image'
                label='Постер'
                cellClassName='size-12 object-contain'
                sortable={false}
              />
              <TextField
                source='name'
                label='Найменування'
              />
              <NumberField
                source='price'
                label='Ціна'
                cellClassName='size-2'
              />
              <NumberField
                source='weight'
                label='Вага'
                cellClassName='size-2'
              />
            </EntityGrid>
          )}
        />
      ) : (
        <List
          className='hidden p-4 md:block'
          actions={
            <HeaderActions
              title='Каталог інгредієнтів'
              secondaryTitle='Додати інгредієнт'
              buttonProps={{
                text: 'Додати інгредієнт',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddIngredient />}
            </HeaderActions>
          }
        >
          <EntityGrid displayedRows={paginated}>
            <ImageField
              source='image'
              label='Постер'
              cellClassName='size-12 object-contain'
              sortable={false}
            />
            <TextField
              source='name'
              label='Найменування'
            />
            <NumberField
              source='price'
              label='Ціна'
              cellClassName='size-2'
            />
            <NumberField
              source='weight'
              label='Вага'
              cellClassName='size-2'
            />
          </EntityGrid>
        </List>
      )}
    </>
  )
}
