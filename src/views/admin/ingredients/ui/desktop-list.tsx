import { ImageField, List, ListBase, NumberField, TextField } from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { IngredientHeaderActions } from '@/widgets/admin/ingredient-header-actions'
import { BulkDeleteIngredients } from '@/features/admin/bulk-delete-ingredients'
import { Ingredient } from '@/entities/ingredient'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'

type Props = {
  paginated: Ingredient[]
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
      actions={<IngredientHeaderActions />}
      empty={
        <ListBase>
          <IngredientHeaderActions />
        </ListBase>
      }
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
        bulkActions={<BulkDeleteIngredients />}
      >
        <ImageField
          source='image'
          label='Постер'
          cellClassName='size-12 object-contain'
          sortable={false}
        />
        <TextField source='label' label='Найменування' />
        <NumberField source='price' label='Ціна' cellClassName='size-2' />
        <NumberField source='weight' label='Вага' cellClassName='size-2' />
      </EntitiesGrid>
    </List>
  )
}
