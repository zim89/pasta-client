'use client'

import { Feature } from '@/types/feature.types'
import { useQuery } from '@tanstack/react-query'
import { Edit, PlusCircle } from 'lucide-react'
import {
  Datagrid,
  ImageField,
  List,
  TextField,
  useAuthenticated
} from 'react-admin'
import { AdminDialog } from '@/components/adminDialog'
import { axiosBase } from '@/api/interceptors'
import { AddForm } from './AddForm'

export const MainPage = () => {
  // Redirect to login page when unauthorized
  useAuthenticated()

  const { data } = useQuery({
    queryKey: ['features'],
    queryFn: async () => {
      const result = await axiosBase.get<Feature[]>(
        process.env.NEXT_PUBLIC_SERVER_URL + '/our-advantages'
      )

      return result.data
    }
  })

  if (!data) return null

  return (
    <List
      resource='our-advantages'
      className='p-4'
      actions={
        <div className='flex w-full items-center py-4'>
          <h2 className='mr-auto font-alegreya text-4xl'>Наші переваги</h2>

          <AdminDialog
            title='Оновити секцію'
            buttonProps={{
              text: 'Оновити',
              leftSection: <Edit size={24} />
            }}
          >
            {() => <p>Update</p>}
          </AdminDialog>

          <AdminDialog
            title='Додати секцію'
            buttonProps={{
              text: 'Додати',
              leftSection: <PlusCircle size={24} />
            }}
          >
            {() => <AddForm />}
          </AdminDialog>
        </div>
      }
    >
      <Datagrid>
        <ImageField
          source='image'
          cellClassName='size-8 object-contain'
          label='Постер'
        />
        <TextField
          source='title'
          label='Найменування'
        />
        <TextField
          source='description'
          label='Опис'
        />
      </Datagrid>
    </List>
  )
}
