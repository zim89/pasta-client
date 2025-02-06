'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrayField,
  BooleanField,
  ChipField,
  List,
  NumberField,
  SingleFieldList,
  TextField,
  useGetList,
} from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { OrderHeaderActions } from '@/widgets/admin/order-header-actions'
import { BulkDeleteOrders } from '@/features/admin/bulk-delete-orders'
import { Order } from '@/entities/order/model/types'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useListPagination } from '@/shared/lib/hooks/useListPagination'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { Empty } from './ui/Empty'

export const OrdersList = () => {
  const router = useRouter()
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('order')
  const [displayedRows, setDisplayedRows] = useState<Order[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] =
    useListPagination(displayedRows, Number(pageParam), Number(limitParam))

  useEffect(() => {
    router.replace('#/order?perPage=5&page=1')
  }, [])

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Order

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (orderParam === 'DESC') return b[sort]! < a[sort]! ? -1 : 1
        return a[sort]! < b[sort]! ? -1 : 1
      }),
    ])
  }, [sortParam, orderParam])

  useEffect(() => {
    if (data) {
      setDisplayedRows(data)
    }
  }, [data])

  useEffect(() => {
    if (limitParam) {
      setLimit(Number(limitParam))
    }
  }, [limitParam])

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(Number(pageParam))
    }
  }, [pageParam])

  return (
    <>
      {isMobileScreen ? (
        <MobileEntitiesGrid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          empty={<Empty />}
          actions={<OrderHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid
              displayedRows={rows}
              bulkActions={<BulkDeleteOrders />}
            >
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
      ) : (
        <List
          className='hidden p-4 md:block'
          empty={<Empty />}
          perPage={Number(limitParam)}
          actions={<OrderHeaderActions />}
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
      )}
    </>
  )
}
