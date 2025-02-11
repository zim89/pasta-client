import {
  ArrayField,
  BooleanField,
  ChipField,
  List,
  NumberField,
  SingleFieldList,
  TextField,
} from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { OrderHeaderActions } from '@/widgets/admin/order-header-actions'
import { BulkDeleteOrders } from '@/features/admin/bulk-delete-orders'
import { Order } from '@/entities/order'
import { AdminPagination } from '@/shared/ui/admin/admin-pagination'
import { Empty } from './Empty'

type Props = {
  paginated: Order[]
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
      empty={<Empty />}
      perPage={limitParam}
      actions={<OrderHeaderActions />}
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
        bulkActions={<BulkDeleteOrders />}
      >
        <TextField source='number' label='Номер' />
        <TextField source='orderDetail.name' label='Клієнт' />
        <ArrayField source='orderItems' label='Продукти'>
          <SingleFieldList
            linkType={false}
            className='max-w-[600px] overflow-hidden text-ellipsis whitespace-pre'
            style={{ flexWrap: 'nowrap' }}
          >
            <ChipField source='dish.title' />
          </SingleFieldList>
        </ArrayField>
        <TextField source='orderDetail.date' label='Дата' />
        <BooleanField source='pickup' label='Самовивіз' />
        <NumberField source='totalPrice' label='Вартість' />
        <TextField source='orderDetail.payType' label='Оплата' />
      </EntitiesGrid>
    </List>
  )
}
