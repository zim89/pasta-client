import { Button, Dialog, DialogContent, DialogTitle } from '@/shared/ui'
import { Trash2 } from 'lucide-react'

type Props = {
  openingButton: React.ReactNode
  opened: boolean
  handleOpenChange: (val: boolean) => void
  handleConfirm: () => void
  title: string
}

export const DeleteItemModal = ({
  openingButton,
  handleOpenChange,
  opened,
  handleConfirm,
  title,
}: Props) => {
  return (
    <>
      {/* Opening button */}
      {openingButton}
      <Dialog open={opened} onOpenChange={handleOpenChange}>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle hidden>{title}</DialogTitle>
          <div className='flex items-center gap-8'>
            <Trash2 size={36} />
            <div>
              <h3 className='text-xl font-medium'>
                Дана операція видаляє товар.
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Видалити? А раптом це саме те, що вам потрібно!
              </p>
            </div>
          </div>
          <div className='flex justify-end gap-3'>
            <Button onClick={() => handleOpenChange(false)}>Ні</Button>
            <Button onClick={handleConfirm} className='text-danger'>
              Так
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
