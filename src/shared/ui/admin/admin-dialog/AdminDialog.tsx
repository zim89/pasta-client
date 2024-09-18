import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/common/button'
import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/common/dialog'

type Props = {
  children: () => React.ReactNode
  title: string
  buttonProps: {
    text: string
    leftSection?: React.ReactNode
    rightSection?: React.ReactNode
    className?: string
  }
}

export const AdminDialog = ({ children, title, buttonProps }: Props) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button
        className={cn('flex items-center gap-2', buttonProps.className)}
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
