import { ImageField, ListBase, UrlField } from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { PostHeaderActions } from '@/widgets/admin/post-header-action'
import { BulkDeletePosts } from '@/features/admin/bulk-delete-posts'
import { Post } from '@/entities/post'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Post[]
}

export const MobileList = ({
  displayedRows,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <MobileEntitiesGrid
      empty={
        <ListBase>
          <PostHeaderActions />
        </ListBase>
      }
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      displayedRows={displayedRows}
      actions={<PostHeaderActions />}
      renderGrid={rows => (
        <EntitiesGrid displayedRows={rows} bulkActions={<BulkDeletePosts />}>
          <ImageField
            source='image'
            label='Постер'
            cellClassName='size-12 object-contain'
            sortable={false}
          />
          <UrlField source='link' label='Лінк' />
        </EntitiesGrid>
      )}
    />
  )
}
