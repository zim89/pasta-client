import { PlusCircle } from 'lucide-react'
import { HeaderActions } from '@/components/headerActions'
import { CreateIngredient } from '@/features/admin/create-ingredient'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'

export const IngredientHeaderActions = () => {
  return (
    <HeaderActions title='Каталог інгредієнтів'>
      <AdminDialog
        title='Додати інгредієнт'
        buttonProps={{
          text: 'Додати інгредієнт',
          leftSection: <PlusCircle size={24} />
        }}
      >
        {() => <CreateIngredient />}
      </AdminDialog>
    </HeaderActions>
  )
}
