import { useState } from 'react'
import {
  Button,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui'
import { Trash2 } from 'lucide-react'
import { BulkDeleteButton } from 'react-admin'

import { AdminDeleteModal } from '@/shared/ui/admin/admin-delete-modal'

type CustomBulkDeleteButtonProps = {
  title: string
  description: string
}

export const CustomBulkDeleteButton = ({
  description,
  title,
}: CustomBulkDeleteButtonProps) => {
  const [showed, setShowed] = useState(false)

  const handleClose = () => {
    setShowed(false)
  }

  return (
    <AdminDeleteModal
      kind='stateful'
      onOpenChange={setShowed}
      open={showed}
      toggler={
        <span
          onClick={() => setShowed(true)}
          className='inline-flex items-center text-danger'
        >
          <Trash2 size={16} className='mr-2' /> Видалити
        </span>
      }
    >
      <DialogHeader>
        <DialogTitle className='mb-3'>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button onClick={handleClose} className='text-grey'>
          Скасувати
        </Button>
        <BulkDeleteButton
          onClick={handleClose}
          label='Видалити'
          successMessage='Операція була успішною'
        />
      </DialogFooter>
    </AdminDeleteModal>
  )
}
