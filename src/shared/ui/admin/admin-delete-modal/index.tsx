'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../common'

type Stateless = {
  kind: 'stateless'
  toggler: React.ReactNode
  children: React.ReactNode
}

type Stateful = {
  kind: 'stateful'
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  toggler: React.ReactNode
  children: React.ReactNode
}

type Props = Stateless | Stateful

export const AdminDeleteModal = (props: Props) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Dialog
        open={props.kind === 'stateful' ? props.open : show}
        onOpenChange={props.kind === 'stateful' ? props.onOpenChange : setShow}
      >
        <DialogTrigger>{props.toggler}</DialogTrigger>
        <DialogContent
          onInteractOutside={() =>
            (props.kind === 'stateful' ? props.onOpenChange : setShow)(false)
          }
          aria-describedby={undefined}
        >
          <DialogHeader className='hidden'>
            <DialogTitle>Видалити запис</DialogTitle>
          </DialogHeader>
          {props.children}
        </DialogContent>
      </Dialog>
    </>
  )
}
