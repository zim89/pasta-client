import { PlusCircle } from 'lucide-react'
import { HeaderActions } from '@/components/headerActions'
import { AddAdvantage } from '@/features/create-advantage'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'

export const AdvantageHeaderActions = () => {
  return (
    <HeaderActions title='Наші переваги'>
      <AdminDialog
        title='Додати секцію'
        buttonProps={{
          text: 'Додати секцію',
          leftSection: <PlusCircle size={24} />
        }}
      >
        {() => <AddAdvantage />}
      </AdminDialog>
    </HeaderActions>
  )
}
