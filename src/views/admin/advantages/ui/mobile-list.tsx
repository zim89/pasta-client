import { ImageField, ListBase, TextField } from 'react-admin'

import { AdvantageHeaderActions } from '@/widgets/admin/advantage-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteAdvantages } from '@/features/admin/bulk-delete-advantages/ui'
import { Feature } from '@/entities/feature'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Feature[]
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
          <AdvantageHeaderActions />
        </ListBase>
      }
      actions={<AdvantageHeaderActions />}
      renderGrid={rows => (
        <EntitiesGrid
          displayedRows={rows}
          bulkActions={<BulkDeleteAdvantages />}
        >
          <ImageField
            source='image'
            cellClassName='size-8 object-contain'
            label='Постер'
          />
          <TextField source='title' label='Найменування' />
          <TextField source='description' label='Опис' />
        </EntitiesGrid>
      )}
    />
  )
}
