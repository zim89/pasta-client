import { PlusCircle } from 'lucide-react'

import { CreateIngredient } from '@/features/admin/create-ingredient'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'
import { HeaderActions } from '@/shared/ui/admin/admin-header-actions'

export const IngredientHeaderActions = () => {
  return (
    <HeaderActions title='Каталог інгредієнтів'>
      <AdminDialog
        title='Додати інгредієнт'
        buttonProps={{
          text: 'Додати інгредієнт',
          leftSection: <PlusCircle size={24} />,
        }}
      >
        {() => <CreateIngredient />}
      </AdminDialog>
    </HeaderActions>
  )
}
