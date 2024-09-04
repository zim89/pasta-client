import { useEffect, useState } from 'react'
import { Ingredient } from '@/types/dish.types'
import { useSearchParams } from 'next/navigation'
import {
  Datagrid,
  ImageField,
  InfiniteList,
  List,
  NumberField,
  TextField,
  useGetList
} from 'react-admin'
import { useHashParamValue } from '@/hooks/useHashValues'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'

export const IngredientList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('ingredient')
  const [displayedRows, setDisplayedRows] = useState<Ingredient[]>(data || [])

  const limit = useHashParamValue('perPage')
  const page = useHashParamValue('page')
  const sort = useHashParamValue('sort')
  const order = useHashParamValue('order')

  const [_, { paginated, setLimit, setCurrentPage }] = usePaginate(
    displayedRows,
    Number(page),
    Number(limit)
  )

  useEffect(() => {
    if (!sort || !order) return

    const sortParam = sort as keyof Ingredient

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (order === 'DESC') return b[sortParam]! < a[sortParam]! ? -1 : 1
        return a[sortParam]! < b[sortParam]! ? -1 : 1
      })
    ])
  }, [sort, order])

  useEffect(() => {
    if (data) setDisplayedRows(data)
  }, [data])

  useEffect(() => {
    if (limit) {
      setLimit(Number(limit))
    }
  }, [limit])

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page))
    }
  }, [page])

  const Grid = () => {
    return (
      <Datagrid data={paginated}>
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
      </Datagrid>
    )
  }

  return (
    <>
      {isMobileScreen ? (
        <InfiniteList>
          <Grid />
        </InfiniteList>
      ) : (
        <List perPage={10}>
          <Grid />
        </List>
      )}
    </>
  )
}
