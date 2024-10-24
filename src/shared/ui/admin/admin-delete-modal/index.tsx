'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../common'

type Props = {
  toggler: React.ReactNode
  children: React.ReactNode
}

export const AdminDeleteModal = ({ toggler, children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{toggler}</DialogTrigger>
        <DialogContent
          onInteractOutside={() => setOpen(false)}
          aria-describedby={undefined}
        >
          <DialogHeader className='hidden'>
            <DialogTitle>Видалити секцію</DialogTitle>
          </DialogHeader>

          <div>
            <h2>Ви впевнені?</h2>
          </div>
          {children}
        </DialogContent>
      </Dialog>
    </>
  )
}
