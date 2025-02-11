import { Datagrid, ImageField, List, ListBase, TextField } from 'react-admin'

import { AdvantageHeaderActions } from '@/widgets/admin/advantage-header-actions'
import { BulkDeleteAdvantages } from '@/features/admin/bulk-delete-advantages/ui'
import { Feature } from '@/entities/feature'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'

type Props = {
  paginated: Feature[]
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
          <AdvantageHeaderActions />
        </ListBase>
      }
      actions={<AdvantageHeaderActions />}
      perPage={Number(limitParam)}
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
      <Datagrid data={paginated} bulkActionButtons={<BulkDeleteAdvantages />}>
        <ImageField
          source='image'
          cellClassName='size-8 object-contain'
          label='Постер'
        />

        <TextField source='title' label='Найменування' />
        <TextField source='description' label='Опис' />
      </Datagrid>
    </List>
  )
}
