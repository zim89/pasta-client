import { Dialog, DialogContent, DialogTitle } from '@/shared/ui'
import { DialogProps } from '@radix-ui/react-dialog'

export const ChangePasswordModal = (props: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle hidden>Changing password</DialogTitle>
        <p>Hello?</p>
      </DialogContent>
    </Dialog>
  )
}
