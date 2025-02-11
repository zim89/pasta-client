import { ImageField, List, ListBase, UrlField } from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { PostHeaderActions } from '@/widgets/admin/post-header-action'
import { BulkDeletePosts } from '@/features/admin/bulk-delete-posts'
import { Post } from '@/entities/post'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'

type Props = {
  paginated: Post[]
  currentPage: number
  setCurrentPage: (page: number) => void
  setLimit: (page: number) => void
  countItems: number
  limitParam: number
}

export const DesktopList = ({
  paginated,
  currentPage,
  setCurrentPage,
  setLimit,
  countItems,
  limitParam,
}: Props) => {
  return (
    <List
      className='hidden p-4 md:block'
      actions={<PostHeaderActions />}
      perPage={limitParam}
      empty={
        <ListBase>
          <PostHeaderActions />
        </ListBase>
      }
      pagination={
        <AdminPagination
          hidden={!paginated.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLimit={setLimit}
          countItems={countItems}
          limitParam={limitParam}
        />
      }
    >
      <EntitiesGrid displayedRows={paginated} bulkActions={<BulkDeletePosts />}>
        <ImageField
          source='image'
          label='Постер'
          cellClassName='size-12 object-contain'
          sortable={false}
        />
        <UrlField source='link' label='Лінк' />
      </EntitiesGrid>
    </List>
  )
}
