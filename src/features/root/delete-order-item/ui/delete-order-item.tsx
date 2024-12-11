import { useState } from 'react'
import { Trash2 } from 'lucide-react'

import { CartItem } from '@/entities/cart'
import { DeleteItemModal } from './delete-modal-item'

type Props = {
  removeDish: (id: string) => void
  item: CartItem
}

export const DeleteOrderItem = ({ item, removeDish }: Props) => {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)

  return (
    <div className='w-[90px] xl:w-auto'>
      <DeleteItemModal
        handleOpenChange={val => setDeleteModalOpened(val)}
        opened={deleteModalOpened}
        title='Delete Item'
        handleConfirm={() => {
          removeDish(item.id)
          setDeleteModalOpened(false)
        }}
        openingButton={
          <button
            type='button'
            onClick={() => setDeleteModalOpened(true)}
            className='ml-auto'
          >
            <Trash2
              size={24}
              className='text-gray-500 transition-colors hover:text-danger'
            />
          </button>
        }
      />
    </div>
  )
}
