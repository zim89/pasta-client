import { PlusCircle } from 'lucide-react'
import { HeaderActions } from '@/components/headerActions'
import { CreateProduct } from '@/features/create-dish'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'

export const DishHeaderActions = () => {
  return (
    <HeaderActions title='Каталог страв'>
      <AdminDialog
        title='Додати страву'
        buttonProps={{
          text: 'Додати страву',
          leftSection: <PlusCircle size={24} />
        }}
      >
        {() => <CreateProduct />}
      </AdminDialog>
    </HeaderActions>
  )
}
