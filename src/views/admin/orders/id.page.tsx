'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/ui'
import { Check, Edit2, X } from 'lucide-react'
import { useShowContext } from 'react-admin'

import { Order } from '@/entities/order/model/types'
import { AdminDialog } from '@/shared/ui/admin/admin-dialog'

export const ShowOrder = () => {
  const streetField = useRef<HTMLDivElement>(null)

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
    if (streetField.current && isEditingOrder) {
      streetField.current.focus()
    }
  }, [isEditingOrder, streetField])

  useEffect(() => {
    if (source) setAddress(source.deliveryAdress)
  }, [source])

  const handleInput = (text: string, param: keyof Order['deliveryAdress']) => {
    setAddress(prev => ({ ...prev, [param]: text }))
  }

  if (!source) return null

  const handleUpdate = () => {
    console.log(address)
  }

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
                    {() => (
                      <>
                        <p className='text-sm text-grey'>
                          Інформація про замовлення буде змінено.
                        </p>

                        <Button
                          onClick={handleUpdate}
                          className='ml-auto rounded-lg border hover:bg-black hover:text-white'
                        >
                          <Edit2 size={16} className='mr-2' /> Зберегти
                        </Button>
                      </>
                    )}
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
                <div className='border-b border-l border-primary-lightest p-2 outline-none'>
                  {address.city}
                </div>
              </>
              <>
                <h3 className='border-b border-primary-lightest p-2'>Вулиця</h3>
                <div
                  ref={streetField}
                  contentEditable={isEditingOrder}
                  suppressContentEditableWarning
                  className={
                    'border-b border-l border-primary-lightest p-2 focus:rounded focus:!shadow-none'
                  }
                  style={
                    isEditingOrder
                      ? {
                          boxShadow: 'inset 0px 0px 0px 1px #d4e3e8',
                        }
                      : undefined
                  }
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
                  className={
                    'border-b border-l border-primary-lightest p-2 focus:rounded focus:!shadow-none'
                  }
                  style={
                    isEditingOrder
                      ? {
                          boxShadow: 'inset 0px 0px 0px 1px #d4e3e8',
                        }
                      : undefined
                  }
                >
                  {address.buildingNumber}
                </div>
              </>
              {address.flatNumber != null && (
                <>
                  <h3 className='border-b border-primary-lightest p-2 focus:rounded focus:!shadow-none'>
                    Квартира
                  </h3>
                  <div
                    contentEditable={isEditingOrder}
                    suppressContentEditableWarning
                    className={'border-b border-l border-primary-lightest p-2'}
                    style={
                      isEditingOrder
                        ? {
                            boxShadow: 'inset 0px 0px 0px 1px #d4e3e8',
                          }
                        : undefined
                    }
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
                    className={
                      'border-b border-l border-primary-lightest p-2 focus:rounded focus:!shadow-none'
                    }
                    style={
                      isEditingOrder
                        ? {
                            boxShadow: 'inset 0px 0px 0px 1px #d4e3e8',
                          }
                        : undefined
                    }
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
                    className={
                      'border-l border-primary-lightest p-2 focus:rounded focus:!shadow-none'
                    }
                    style={
                      isEditingOrder
                        ? {
                            boxShadow: 'inset 0px 0px 0px 1px #d4e3e8',
                          }
                        : undefined
                    }
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
