import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'

type Props = {
  children: () => React.ReactNode
  title: string
  buttonProps: {
    text: string
    leftSection?: React.ReactNode
    rightSection?: React.ReactNode
  }
}

export const AdminDialog = ({ children, title, buttonProps }: Props) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button
        className='flex items-center gap-2'
        onClick={() => setOpened(true)}
      >
        {buttonProps.leftSection}
        {buttonProps.text}
        {buttonProps.rightSection}
      </Button>
      <Dialog
        open={opened}
        onOpenChange={setOpened}
        modal
      >
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <div className='flex items-center'>{children()}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}
