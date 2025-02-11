import {
  ArrayField,
  BooleanField,
  ChipField,
  NumberField,
  SingleFieldList,
  TextField,
} from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { OrderHeaderActions } from '@/widgets/admin/order-header-actions'
import { BulkDeleteOrders } from '@/features/admin/bulk-delete-orders'
import { Order } from '@/entities/order'
import { Empty } from './Empty'

type Props = {
  currentPage: number
  setCurrentPage: (page: number) => void
  displayedRows: Order[]
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
      empty={<Empty />}
      actions={<OrderHeaderActions />}
      renderGrid={rows => (
        <EntitiesGrid displayedRows={rows} bulkActions={<BulkDeleteOrders />}>
          <TextField source='number' label='Номер' />
          <TextField source='orderDetail.name' label='Клієнт' />
          <ArrayField source='orderItems' label='Продукти'>
            <SingleFieldList
              className='overflow-hidden text-ellipsis whitespace-pre'
              linkType={false}
              style={{
                flexWrap: 'nowrap',
              }}
            >
              <ChipField source='dish.title' />
            </SingleFieldList>
          </ArrayField>
          <TextField source='orderDetail.date' label='Дата' />
          <BooleanField source='pickup' label='Самовивіз' />
          <NumberField source='totalPrice' label='Вартість' />
          <TextField source='orderDetail.payType' label='Оплата' />
        </EntitiesGrid>
      )}
    />
  )
}
