import { DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui'
import { Trash2 } from 'lucide-react'
import { DeleteButton, SaveButton } from 'react-admin'

import { AdminDeleteModal } from '@/shared/ui/admin/admin-delete-modal'

export const CustomEditFormToolbar = () => {
  return (
    <div className='flex justify-between p-4'>
      <SaveButton label='Зберегти' />
      <AdminDeleteModal
        kind='stateless'
        toggler={
          <span className='inline-flex items-center gap-2 text-lg text-danger'>
            <Trash2 size={14} />
            Видалити
          </span>
        }
      >
        <DialogHeader>
          <DialogTitle>Видалити даний запис?</DialogTitle>
          <DialogDescription className='!my-4'>
            Даний запис вже не можна буде повернути.
          </DialogDescription>
        </DialogHeader>
        <DeleteButton className='max-w-min' label='Видалити' />
      </AdminDeleteModal>
    </div>
  )
}
