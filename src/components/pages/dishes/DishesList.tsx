import { useEffect, useState } from 'react'
import { Dish } from '@/types/dish.types'
import { PlusCircle } from 'lucide-react'
import { Datagrid, ImageField, List, TextField, useGetList } from 'react-admin'
import { AdminDialog } from '@/components/adminDialog'
import { useHashParamValue } from '@/hooks/useHashValues'
import { usePaginate } from '@/hooks/usePaginate'
import { AddDishForm } from './AddDishForm'

export const ProductList = () => {
  const { data } = useGetList('dish')
  const [displayedRows, setDisplayedRows] = useState<Dish[]>(data || [])

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

    const sortParam = sort as keyof Dish

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (order === 'DESC') return b[sortParam]! < a[sortParam]! ? -1 : 1
        return a[sortParam]! < b[sortParam]! ? -1 : 1
      })
    ])
  }, [sort, order])

  useEffect(() => {
    if (data) {
      setDisplayedRows(data)
      setLimit(5)
    }
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

  return (
    <List
      actions={
        <div className='flex w-full items-center py-4'>
          <h2 className='mr-auto font-alegreya text-4xl'>Каталог страв</h2>
          <AdminDialog
            title='Додати страву'
            buttonProps={{
              text: 'Додати',
              leftSection: <PlusCircle size={24} />
            }}
          >
            {() => <AddDishForm />}
          </AdminDialog>
        </div>
      }
    >
      <Datagrid data={paginated}>
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
      </Datagrid>
    </List>
  )
}
