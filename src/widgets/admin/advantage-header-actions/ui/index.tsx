import { PlusCircle } from 'lucide-react'

import { AddAdvantage } from '@/features/admin/create-advantage'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'
import { HeaderActions } from '@/shared/ui/admin/admin-header-actions'

export const AdvantageHeaderActions = () => {
  return (
    <HeaderActions title='Наші переваги'>
      <AdminDialog
        title='Додати секцію'
        buttonProps={{
          text: 'Додати секцію',
          leftSection: <PlusCircle size={24} />,
        }}
      >
        {() => <AddAdvantage />}
      </AdminDialog>
    </HeaderActions>
  )
}
