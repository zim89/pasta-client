'use client'

import { useState } from 'react'
import { Feature } from '@/types/feature.types'
import { DialogClose, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import {
  Edit,
  MonitorSmartphone,
  PlusCircle,
  Smartphone,
  Tablet,
  X
} from 'lucide-react'
import Link from 'next/link'
import {
  Datagrid,
  ImageField,
  List,
  TextField,
  useAuthenticated
} from 'react-admin'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { axiosBase } from '@/api/interceptors'
import { AddForm } from './AddForm'

export const MainPage = () => {
  const [opened, setOpened] = useState(false)

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
    <div className='p-4'>
      <List
        resource='our-advantages'
        actions={
          <div className='flex w-full items-center py-1'>
            <h2 className='text-4xl font-alegreya mr-auto'>Наші переваги</h2>
            <Button className='flex items-center gap-2'>
              <Edit size={24} />
              Оновити
            </Button>
            <Button
              className='flex items-center gap-2'
              onClick={() => setOpened(true)}
            >
              <PlusCircle size={24} />
              Додати
            </Button>
          </div>
        }
      >
        <Datagrid>
          <TextField
            source='id'
            cellClassName='size-1'
          />
          <ImageField
            source='image'
            cellClassName='size-8 object-contain'
          />
          <TextField source='title' />
          <TextField source='description' />
        </Datagrid>
      </List>

      <Dialog
        open={opened}
        onOpenChange={setOpened}
      >
        <DialogContent className='absolute bg-black bg-opacity-30 z-10 top-0 bottom-0 left-0 right-0 flex justify-center flex-col items-center'>
          <div className='flex items-center'>
            <DialogTitle hidden>Додати секцію</DialogTitle>
          </div>
          <AddForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
