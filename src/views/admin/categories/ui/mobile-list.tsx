import { ListBase, TextField } from 'react-admin'

import { CategoryHeaderActions } from '@/widgets/admin/category-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteCategories } from '@/features/admin/bulk-delete-categories'
import { Category } from '@/entities/category'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Category[]
}

export const MobileList = ({
  currentPage,
  displayedRows,
  setCurrentPage,
}: Props) => {
  return (
    <MobileEntitiesGrid
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      displayedRows={displayedRows}
      empty={
        <ListBase>
          <CategoryHeaderActions />
        </ListBase>
      }
      actions={<CategoryHeaderActions />}
      renderGrid={rows => (
        <EntitiesGrid
          displayedRows={rows}
          bulkActions={<BulkDeleteCategories />}
        >
          <TextField source='id' label='№' />
          <TextField source='name' label='Найменування' />
        </EntitiesGrid>
      )}
    />
  )
}
