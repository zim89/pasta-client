import { ImageField, List, ListBase, TextField, WithRecord } from 'react-admin'

import { DishHeaderActions } from '@/widgets/admin/dish-header-actions'
import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { BulkDeleteDishes } from '@/features/admin/bulk-delete-dishes'
import { Dish } from '@/entities/dish'
import { isDrink } from '@/entities/dish/lib/dish.helpers'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'

type Props = {
  paginated: Dish[]
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
      className='p-4'
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
      actions={<DishHeaderActions />}
      empty={
        <ListBase>
          <DishHeaderActions />
        </ListBase>
      }
    >
      <EntitiesGrid
        displayedRows={paginated}
        bulkActions={<BulkDeleteDishes />}
      >
        <ImageField
          source='image'
          cellClassName='size-8 object-contain'
          sortable={false}
          label='Фото'
        />
        <TextField source='title' label='Назва' />
        <TextField source='category.name' sortable={false} label='Тип' />
        <TextField source='composition' sortable={false} label='Композиція' />
        <TextField source='price' label='Ціна (₴)' />
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
    </List>
  )
}
