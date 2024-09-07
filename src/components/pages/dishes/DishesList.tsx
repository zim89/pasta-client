import { useEffect, useState } from 'react'
import { Dish } from '@/types/dish.types'
import { PlusCircle } from 'lucide-react'
import { ImageField, List, TextField, useGetList } from 'react-admin'
import { EntityGrid } from '@/components/entityGrid'
import { HeaderActions } from '@/components/headerActions'
import { MobileGrid } from '@/components/mobileGrid'
import { useHashParamValue } from '@/hooks/useHashValues'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'
import { AddDishForm } from './AddDishForm'

export const ProductList = () => {
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
    Number(limitParam)
  )

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Dish

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
          actions={
            <HeaderActions
              title='Каталог страв'
              buttonProps={{
                text: 'Додати страву',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddDishForm />}
            </HeaderActions>
          }
          displayedRows={displayedRows}
          renderGrid={rows => (
            <EntityGrid displayedRows={rows}>
              <ImageField
                source='image'
                cellClassName='size-8 object-contain'
                sortable={false}
                label='Фото'
              />
              <TextField
                source='title'
                label='Назва'
              />
              <TextField
                source='type'
                sortable={false}
                label='Тип'
              />
              <TextField
                source='composition'
                sortable={false}
                label='Композиція'
              />
              <TextField
                source='price'
                label='Ціна'
              />
              <TextField
                source='weight'
                sortable={false}
                label='Вага'
              />
              <TextField
                source='volume'
                sortable={false}
                label='Обсяг'
              />
            </EntityGrid>
          )}
        />
      ) : (
        <List
          className='p-4'
          actions={
            <HeaderActions
              title='Каталог страв'
              buttonProps={{
                text: 'Додати страву',
                leftSection: <PlusCircle size={24} />
              }}
            >
              {() => <AddDishForm />}
            </HeaderActions>
          }
        >
          <EntityGrid displayedRows={paginated}>
            <ImageField
              source='image'
              cellClassName='size-8 object-contain'
              sortable={false}
              label='Фото'
            />
            <TextField
              source='title'
              label='Назва'
            />
            <TextField
              source='type'
              sortable={false}
              label='Тип'
            />
            <TextField
              source='composition'
              sortable={false}
              label='Композиція'
            />
            <TextField
              source='price'
              label='Ціна'
            />
            <TextField
              source='weight'
              sortable={false}
              label='Вага'
            />
            <TextField
              source='volume'
              sortable={false}
              label='Обсяг'
            />
          </EntityGrid>
        </List>
      )}
    </>
  )
}
