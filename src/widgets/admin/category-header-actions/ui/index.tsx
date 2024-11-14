import { PlusCircle } from 'lucide-react'

import { CreateCategory } from '@/features/admin/create-category'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'
import { HeaderActions } from '@/shared/ui/admin/admin-header-actions'

export const CategoryHeaderActions = () => {
  return (
    <HeaderActions title='Категорії'>
      <AdminDialog
        title='Додати категорію'
        buttonProps={{
          text: 'Додати категорію',
          leftSection: <PlusCircle size={24} />,
        }}
      >
        {() => <CreateCategory />}
      </AdminDialog>
    </HeaderActions>
  )
}
