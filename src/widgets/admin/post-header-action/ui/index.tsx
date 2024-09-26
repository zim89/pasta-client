import { PlusCircle } from 'lucide-react'

import { CreatePost } from '@/features/admin/create-post/ui'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'
import { HeaderActions } from '@/shared/ui/admin/admin-header-actions'

export const PostHeaderActions = () => {
  return (
    <HeaderActions title='Список постів'>
      <AdminDialog
        title='Додати новий пост'
        buttonProps={{
          text: 'Додати новий пост',
          leftSection: <PlusCircle size={24} />,
        }}
      >
        {() => <CreatePost />}
      </AdminDialog>
    </HeaderActions>
  )
}
