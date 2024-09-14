import { Order } from '@/types/order.types'
import { useShowContext } from 'react-admin'

export const ShowOrder = () => {
  const { record } = useShowContext()
  const source: Order = record

  return (
    <>
      <div className='p-2'>
        <div className='mb-6'>
          <h3 className='text-3xl font-semibold'>
            Замовлення №{source.number.toUpperCase()}
          </h3>
          <p className='mt-2'>Дата оформлення: {source.orderDetail.date}</p>
        </div>
        <div className='flex gap-10'>
          <div className='w-full border border-grey'>
            <h2 className='p-3'>Деталі замовлення</h2>
            <div className='flex h-[calc(100%-48px)] flex-col'>
              <div className='flex items-center gap-6 border-y border-y-grey'>
                <span className='min-w-24 border-r border-r-grey p-3'>
                  {`Ім'я`}
                </span>
                <p>{source.orderDetail.name}</p>
              </div>
              <div className='flex items-center gap-6'>
                <span className='min-w-24 border-r border-r-grey p-3'>
                  Пошта
                </span>
                <p>{source.orderDetail.email}</p>
              </div>
              <div className='flex items-center gap-6 border-y border-y-grey'>
                <span className='min-w-24 border-r border-r-grey p-3'>
                  Дата
                </span>
                <p>{source.orderDetail.date}</p>
              </div>
              <div className='flex h-full items-start gap-6'>
                <span className='h-full min-w-24 border-r border-r-grey p-3'>
                  Оплата
                </span>
                <p className='py-3'>{source.orderDetail.payType}</p>
              </div>
              {!source.orderDetail.noChange && (
                <div className='flex h-full items-center gap-6'>
                  <span className='min-w-24 border-r border-r-grey p-3'>
                    Здача з
                  </span>
                  <p>{source.orderDetail.changeFrom}</p>
                </div>
              )}
            </div>
          </div>
          <div className='w-full border border-grey'>
            <h2 className='p-3'>Деталі доставки</h2>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6 border-y border-y-grey'>
                <span className='min-w-40 border-r border-r-grey p-3'>
                  Місто
                </span>
                <p>{source.deliveryAdress.city}</p>
              </div>
              <div className='flex items-center gap-6'>
                <span className='min-w-40 border-r border-r-grey p-3'>
                  Вулиця
                </span>
                <p>{source.deliveryAdress.street}</p>
              </div>
              <div className='flex items-center gap-6 border-y border-y-grey'>
                <span className='min-w-40 border-r border-r-grey p-3'>
                  Будинок
                </span>
                <p>{source.deliveryAdress.buildingNumber}</p>
              </div>
              {source.deliveryAdress.entrance != null && (
                <div className='flex items-center gap-6'>
                  <span className='min-w-40 border-r border-r-grey p-3'>
                    {`Під'їзд`}
                  </span>
                  <p>{source.deliveryAdress.entrance}</p>
                </div>
              )}
              {source.deliveryAdress.flatNumber != null && (
                <div className='flex items-center gap-6 border-y border-y-grey'>
                  <span className='min-w-40 border-r border-r-grey p-3'>
                    Номер квартири
                  </span>
                  <p>{source.deliveryAdress.flatNumber}</p>
                </div>
              )}
              {source.deliveryAdress.floor != null && (
                <div className='flex items-center gap-6 border-b border-b-grey'>
                  <span className='min-w-40 border-r border-r-grey p-3'>
                    Поверх
                  </span>
                  <p>{source.deliveryAdress.floor}</p>
                </div>
              )}
              {source.deliveryAdress.intercomCode != null && (
                <div className='flex items-center gap-6'>
                  <span className='min-w-40 border-r border-r-grey p-3'>
                    Інтерком
                  </span>
                  <p>{source.deliveryAdress.intercomCode}</p>
                </div>
              )}
              {!source.orderDetail.noChange && (
                <div className='flex items-center gap-6'>
                  <span className='min-w-24 border-r border-r-grey p-3'>
                    Здача з
                  </span>
                  <p>{source.orderDetail.changeFrom}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
