import { ImageField, ListBase, TextField, WithRecord } from 'react-admin'

import { DishHeaderActions } from '@/widgets/admin/dish-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { BulkDeleteDishes } from '@/features/admin/bulk-delete-dishes'
import { Dish } from '@/entities/dish'
import { isDrink } from '@/entities/dish/lib/dish.helpers'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Dish[]
}

export const MobileList = ({
  displayedRows,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <MobileEntitiesGrid
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      actions={<DishHeaderActions />}
      empty={
        <ListBase>
          <DishHeaderActions />
        </ListBase>
      }
      displayedRows={displayedRows}
      renderGrid={rows => (
        <EntitiesGrid displayedRows={rows} bulkActions={<BulkDeleteDishes />}>
          <ImageField
            source='image'
            cellClassName='size-8 object-contain'
            sortable={false}
            label='Фото'
          />
          <TextField source='title' label='Назва' />
          <TextField source='category.name' sortable={false} label='Тип' />
          <TextField source='composition' sortable={false} label='Композиція' />
          <TextField source='price' label='Ціна' />
          <WithRecord
            label="Вага/Об'єм"
            render={record => (
              <span>
                {isDrink(record)
                  ? record.volume
                    ? `${record.volume} л`
                    : 'N/A'
                  : record.weight
                    ? `${record.weight} гр`
                    : 'N/A'}
              </span>
            )}
          />
        </EntitiesGrid>
      )}
    />
  )
}
