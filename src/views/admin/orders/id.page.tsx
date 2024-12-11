'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/ui'
import { Check, Edit2, X } from 'lucide-react'
import { useShowContext, useUpdate } from 'react-admin'

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
      city: 'Київ',
      region: '',
      postalCode: '',
    },
  )

  const [update] = useUpdate()

  useEffect(() => {
    if (record) return
    ;(async () => {
      const res = await refetch()
      setSource(res.data)
    })()
  }, [record, refetch])

  useEffect(() => {
    if (streetField.current && isEditingOrder) {
      streetField.current.focus()
    }
  }, [isEditingOrder, streetField])

  useEffect(() => {
    if (source) setAddress(source.deliveryAdress)
  }, [source])

  const handleInput = (
    source: EventTarget & HTMLDivElement,
    value: string | number,
    param: keyof Order['deliveryAdress'],
  ) => {
    // Update the state with the new value

    setAddress(prev => {
      return { ...prev, [param]: value }
    })

    // Ensure the value is a string
    const valueStr = value.toString()

    // Wait for the DOM to update with the new value
    setTimeout(() => {
      // Create a range and set the start and end positions
      const range = document.createRange()
      const selection = window.getSelection()

      // Ensure the source has the correct text content
      source.textContent = valueStr

      // Set the caret position to the end of the text content
      const textNode = source.firstChild
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        const offset = Math.min(
          valueStr.length,
          textNode.textContent?.length || 0,
        )
        range.setStart(textNode, offset)
        range.setEnd(textNode, offset)

        // Remove all ranges from the selection
        selection?.removeAllRanges()

        // Add the new range to the selection
        selection?.addRange(range)
      }
    }, 0)
  }

  if (!source) return null

  const handleNumberInput = (
    e: React.ChangeEvent<HTMLDivElement>,
    param: keyof Order['deliveryAdress'],
  ) => {
    const textContent = e.target.textContent
    if (textContent && !isNaN(Number(textContent))) {
      handleInput(e.target, Number(textContent), param)
    } else {
      // Prevent the default behavior if the input is not a valid number
      e.preventDefault()
    }
  }

  const handleUpdate = async () => {
    try {
      await update('order', {
        id: source.id,
        data: {
          items: source.orderItems.map(orderItem => ({
            dishId: orderItem.dish.id,
            ingridients: orderItem.orderItemIngredients.map(ingr => ({
              ingridientId: ingr.id,
              quantity: ingr.quantity,
            })),
          })),
          pickup: source.pickup,
          deliveryDetails: {
            city: source.deliveryAdress.city,
            street: address.street,
            buildingNumber: address.buildingNumber,
            entrance: address.entrance,
            flatNumber: address.flatNumber,
            floor: address.floor,
            intercomCode: address.intercomCode,
          },
          orderDetails: source.orderDetail,
        },
      })
      setIsEditingOrder(false)
    } catch (err) {
      setIsEditingOrder(false)
      console.error(err)
    }
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
                  <span className='border-r-grey min-w-24 border-r p-3'>
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
                        <p className='text-grey text-sm'>
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
                  onInput={(e: ChangeEvent<HTMLDivElement>) =>
                    e.target.textContent &&
                    handleInput(e.target, e.target.textContent, 'street')
                  }
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
                  onChange={console.log}
                  suppressContentEditableWarning
                  className={
                    'border-b border-l border-primary-lightest p-2 focus:rounded focus:!shadow-none'
                  }
                  onInput={(e: ChangeEvent<HTMLDivElement>) =>
                    e.target.textContent &&
                    !isNaN(Number(e.target.textContent)) &&
                    handleInput(
                      e.target,
                      Number(e.target.textContent),
                      'buildingNumber',
                    )
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
                    onInput={(e: ChangeEvent<HTMLDivElement>) =>
                      e.target.textContent &&
                      typeof Number(e.target.textContent) === 'number' &&
                      handleInput(
                        e.target,
                        Number(e.target.textContent),
                        'flatNumber',
                      )
                    }
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
                    onInput={(e: ChangeEvent<HTMLDivElement>) =>
                      handleNumberInput(e, 'entrance')
                    }
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
                      handleInput(
                        e.target,
                        e.target.textContent,
                        'intercomCode',
                      )
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
