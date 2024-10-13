import {
  Button,
  ColouredTrash,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/shared/ui'

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
            <ColouredTrash />
            <div>
              <h3 className='text-xl font-medium'>
                Дана операція скасовує товар.
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Скасувати? А раптом це саме те, що вам потрібно!
              </p>
            </div>
          </div>
          <div className='flex justify-end gap-3'>
            <Button onClick={() => handleOpenChange(false)}>Закрити</Button>
            <Button onClick={handleConfirm} className='text-danger'>
              Скасувати
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
