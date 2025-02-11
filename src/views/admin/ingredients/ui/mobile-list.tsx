import { ImageField, ListBase, NumberField, TextField } from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { IngredientHeaderActions } from '@/widgets/admin/ingredient-header-actions'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteIngredients } from '@/features/admin/bulk-delete-ingredients'
import { Ingredient } from '@/entities/ingredient'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Ingredient[]
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
      actions={<IngredientHeaderActions />}
      empty={
        <ListBase>
          <IngredientHeaderActions />
        </ListBase>
      }
      renderGrid={rows => (
        <EntitiesGrid
          displayedRows={rows}
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
      )}
    />
  )
}
