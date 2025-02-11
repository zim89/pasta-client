import { List, ListBase, TextField } from 'react-admin'

import { CategoryHeaderActions } from '@/widgets/admin/category-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { BulkDeleteCategories } from '@/features/admin/bulk-delete-categories'
import { Category } from '@/entities/category'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'

type Props = {
  paginated: Category[]
  currentPage: number
  setCurrentPage: (page: number) => void
  setLimit: (page: number) => void
  countItems: number
  limitParam: number
}

export const DesktopList = ({
  countItems,
  currentPage,
  limitParam,
  paginated,
  setCurrentPage,
  setLimit,
}: Props) => {
  return (
    <List
      className='p-4'
      empty={
        <ListBase>
          <CategoryHeaderActions />
        </ListBase>
      }
      actions={<CategoryHeaderActions />}
      perPage={limitParam}
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
      <EntitiesGrid
        displayedRows={paginated}
        bulkActions={<BulkDeleteCategories />}
      >
        <TextField source='id' label='№' />
        <TextField source='name' label='Найменування' />
      </EntitiesGrid>
    </List>
  )
}
