import { PlusCircle } from 'lucide-react'

import { CreateProduct } from '@/features/admin/create-dish'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'
import { HeaderActions } from '@/shared/ui/admin/admin-header-actions'

export const DishHeaderActions = () => {
  return (
    <HeaderActions title='Каталог страв'>
      <AdminDialog
        title='Додати страву'
        buttonProps={{
          text: 'Додати страву',
          leftSection: <PlusCircle size={24} />,
        }}
      >
        {() => <CreateProduct />}
      </AdminDialog>
    </HeaderActions>
  )
}
