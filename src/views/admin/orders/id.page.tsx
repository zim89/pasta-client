'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Check, Edit2, X } from 'lucide-react'
import { useShowContext } from 'react-admin'

import { Order } from '@/entities/order/model/types'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'

export const ShowOrder = () => {
  const { record, refetch } = useShowContext()
  const [source, setSource] = useState<Order>(record)
  const [isEditingOrder, setIsEditingOrder] = useState(false)
  const [address, setAddress] = useState<Order['deliveryAdress']>(
    source?.deliveryAdress ?? {
      street: '',
      houseNumber: '',
      apartmentNumber: '',
      city: '',
      region: '',
      postalCode: '',
    },
  )

  useEffect(() => {
    if (record) return
    ;(async () => {
      const res = await refetch()
      setSource(res.data)
    })()
  }, [record])

  useEffect(() => {
    if (source) setAddress(source.deliveryAdress)
  }, [source])

  const handleInput = (text: string, param: keyof Order['deliveryAdress']) => {
    setAddress(prev => ({ ...prev, [param]: text }))
  }

  if (!source) return null

  return (
    <>
      <div>
        <div className='mb-2 p-6'>
          <h3 className='text-3xl font-semibold'>
            Замовлення №{source.number.toUpperCase()}
          </h3>
          <p className='mt-2'>Дата оформлення: {source.orderDetail.date}</p>
        </div>
        <div className='flex flex-col p-2 md:flex-row md:gap-6 md:p-6'>
          <div className='flex-1 border border-primary-lightest md:rounded'>
            <div className='bg-primary-lightest px-2 py-3'>
              Деталі замовлення
            </div>
            <div className='grid grid-cols-[auto,1fr] items-center'>
              <>
                <h3 className='border-b border-primary-lightest p-2'>{`Ім'я`}</h3>
                <div className='border-b border-l border-primary-lightest p-2'>
                  {source.orderDetail.name}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Пошта</h3>
                <div className='border-b border-l border-primary-lightest p-2'>
                  {source.orderDetail.email}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>
                  Телефон
                </h3>
                <div className='border-b border-l border-primary-lightest p-2'>
                  {source.orderDetail.phone}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Оплата</h3>
                <div className='border-b border-l border-primary-lightest p-2'>
                  {source.orderDetail.payType}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Дата</h3>
                <div className='border-b border-l border-primary-lightest p-2'>
                  {source.orderDetail.date}
                </div>
              </>
              {!source.orderDetail.noChange && (
                <div className='flex items-center gap-6'>
                  <span className='min-w-24 border-r border-r-grey p-3'>
                    Здача з
                  </span>
                  <p>{source.orderDetail.changeFrom}</p>
                </div>
              )}
              {source.orderDetail.comment && (
                <>
                  <h3 className='p-2'>Відгук</h3>
                  <div className='border-l border-primary-lightest p-2'>
                    {source.orderDetail.comment}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='flex-1 border border-primary-lightest md:rounded'>
            <div className='flex items-center justify-between bg-primary-lightest px-2 py-3'>
              <span>Деталі доставки</span>
              {!isEditingOrder ? (
                <Edit2
                  cursor='pointer'
                  size={16}
                  onClick={() => setIsEditingOrder(true)}
                />
              ) : (
                <div className='flex gap-2'>
                  <AdminDialog
                    title='Редагувати замовлення?'
                    buttonProps={{
                      text: '',
                      className: 'p-0 size-4 pointer-cursor',
                      rightSection: <Check size={16} />,
                    }}
                  >
                    {() => <p>Hello</p>}
                  </AdminDialog>
                  <X
                    size={16}
                    cursor='pointer'
                    onClick={() => setIsEditingOrder(false)}
                  />
                </div>
              )}
            </div>
            <div className='grid grid-cols-[auto,1fr] items-center'>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Місто</h3>
                <div
                  contentEditable={isEditingOrder}
                  suppressContentEditableWarning
                  className='border-b border-l border-primary-lightest p-2'
                >
                  {address.city}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Вулиця</h3>
                <div
                  contentEditable={isEditingOrder}
                  suppressContentEditableWarning
                  className='border-b border-l border-primary-lightest p-2'
                >
                  {address.street}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>
                  Будинок
                </h3>
                <div
                  contentEditable={isEditingOrder}
                  suppressContentEditableWarning
                  className='border-b border-l border-primary-lightest p-2'
                >
                  {address.buildingNumber}
                </div>
              </>
              {address.flatNumber != null && (
                <>
                  <h3 className='border-b border-primary-lightest p-2'>
                    Квартира
                  </h3>
                  <div
                    contentEditable={isEditingOrder}
                    suppressContentEditableWarning
                    className='border-b border-l border-primary-lightest p-2'
                  >
                    {address.flatNumber}
                  </div>
                </>
              )}
              {address.entrance != null && (
                <>
                  <h3 className='border-b border-primary-lightest p-2'>
                    {`Під'їзд`}
                  </h3>
                  <div
                    contentEditable={isEditingOrder}
                    suppressContentEditableWarning
                    className='border-b border-l border-primary-lightest p-2'
                  >
                    {address.entrance}
                  </div>
                </>
              )}
              {address.intercomCode != null && (
                <>
                  <h3 className='p-2'>Інтерком</h3>
                  <div
                    contentEditable={isEditingOrder}
                    suppressContentEditableWarning
                    dangerouslySetInnerHTML={{ __html: address.intercomCode }}
                    onInput={(e: ChangeEvent<HTMLDivElement>) =>
                      e.target.textContent &&
                      handleInput(e.target.textContent, 'intercomCode')
                    }
                    className='border-l border-primary-lightest p-2'
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
