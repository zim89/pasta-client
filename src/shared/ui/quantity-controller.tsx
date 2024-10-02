import { useState } from 'react'

import { DeleteItemModal } from '@/widgets/root/delete-item-modal'
import { Button, Dialog, DialogContent } from './common'

type Props = {
  decrease: () => void
  increase: () => void
  value: number
  handleRemove: () => void
}

export const QuantityController = ({
  decrease,
  increase,
  value,
  handleRemove,
}: Props) => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className='flex items-center gap-2'>
      {value > 1 ? (
        <Button
          type='button'
          onClick={decrease}
          className='size-10 rounded-[6px] border border-gray-400 text-[26px]/[31.47px] font-medium text-gray-700'
        >
          -
        </Button>
      ) : (
        <>
          <DeleteItemModal
            handleOpenChange={val => setModalOpened(val)}
            opened={modalOpened}
            handleConfirm={() => {
              handleRemove()
              setModalOpened(false)
            }}
            openingButton={
              <Button
                type='button'
                onClick={() => setModalOpened(true)}
                className='size-10 rounded-[6px] border border-gray-400 text-[26px]/[31.47px] font-medium text-gray-700'
              >
                <span className='-mt-1'>-</span>
              </Button>
            }
          />
        </>
      )}
      <span className='size-10 rounded-[6px] border border-gray-400 px-[15px] py-2 text-[18px]/[23.4px]'>
        {value}
      </span>
      <Button
        type='button'
        onClick={increase}
        className='size-10 rounded-[6px] border border-gray-400 text-[26px]/[31.47px] font-medium text-gray-700'
      >
        <span className='-mt-1'>+</span>
      </Button>
    </div>
  )
}
