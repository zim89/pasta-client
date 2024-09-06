'use client'

import { PlusCircle } from 'lucide-react'
import { Datagrid, ImageField, List, TextField, useGetList } from 'react-admin'
import { AdminDialog } from '@/components/adminDialog'
import { AddForm } from './AddForm'

export const AdvantagesList = () => {
  const { data } = useGetList('our-advantages')

  return (
    <List
      className='p-4'
      actions={
        <div className='flex w-full items-center py-4'>
          <h2 className='mr-auto font-alegreya text-4xl'>Наші переваги</h2>
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
      <Datagrid data={data}>
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
