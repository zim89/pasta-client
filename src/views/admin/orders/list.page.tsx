'use client'

import { useEffect, useState } from 'react'
import {
  ArrayField,
  BooleanField,
  ChipField,
  DateField,
  List,
  NumberField,
  SingleFieldList,
  TextField,
  useGetList,
} from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { OrderHeaderActions } from '@/widgets/admin/order-header-actions'
import { Order } from '@/entities/order/model/types'
import { useHashParamValue } from '@/shared/lib/hooks/useHashValues'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'
import { EmptyComponent } from './ui/EmptyComponent'

export const OrdersList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('order')
  const [displayedRows, setDisplayedRows] = useState<Order[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] = usePaginate(
    displayedRows,
    Number(pageParam),
    Number(limitParam),
  )

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
      setLimit(5)
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
          empty={<EmptyComponent />}
          actions={<OrderHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid displayedRows={rows}>
              <TextField source='number' label='Номер' />
              <TextField source='orderDetail.name' label='Клієнт' />
              <ArrayField source='orderItems' label='Продукти'>
                <SingleFieldList
                  linkType={false}
                  className='max-w-[600px]'
                  style={{ flexWrap: 'nowrap' }}
                >
                  <ChipField source='dish.title' />
                </SingleFieldList>
              </ArrayField>
              <DateField source='orderDetail.date' label='Дата' />
              <BooleanField source='pickup' label='Самовивіз' />
              <NumberField source='totalPrice' label='Вартість' />
              <TextField source='orderDetail.payType' label='Оплата' />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='hidden p-4 md:block'
          empty={<EmptyComponent />}
          actions={<OrderHeaderActions />}
        >
          <EntitiesGrid displayedRows={paginated}>
            <TextField source='number' label='Номер' />
            <TextField source='orderDetail.name' label='Клієнт' />
            <ArrayField source='orderItems' label='Продукти'>
              <SingleFieldList
                linkType={false}
                className='max-w-[600px]'
                style={{ flexWrap: 'nowrap' }}
              >
                <ChipField source='dish.title' />
              </SingleFieldList>
            </ArrayField>
            <DateField source='orderDetail.date' label='Дата' />
            <BooleanField source='pickup' label='Самовивіз' />
            <NumberField source='totalPrice' label='Вартість' />
            <TextField source='orderDetail.payType' label='Оплата' />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
