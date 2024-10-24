'use client'

import { OrderSummary } from '@/shared/ui/order-summary'
import { PickupAddress } from '@/shared/ui/pickup-address'
import { useQuery } from '@tanstack/react-query'

import { Ingredient, ingredientService } from '@/entities/ingredient'
import { OrderItemCard } from '@/entities/order/ui/order-item-card'
import { QUERY_KEYS } from '@/shared/constants'
import { formatDeliveryString } from './lib/format-delivery-string'
import { mockedOrder } from './lib/mock'

type Props = {
  orderNumber: string
}

export const ConfirmationPage = ({ orderNumber }: Props) => {
  console.log(orderNumber)

  const order = mockedOrder
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.INGREDIENTS],
    queryFn: () => ingredientService.getAll(),
  })

  return (
    <div className='page-wrap'>
      <div className='container'>
        <h2 className='text-center text-[22px] font-medium text-primary md:text-[32px]/[41.6px] md:tracking-[3%] xl:px-72'>
          Вітаємо, Ваше замовлення № {order.number} успішно оформлено!
        </h2>
        <div className='md:mt-10 md:flex md:justify-between xl:mt-[73px]'>
          {order.pickup ? (
            <div>
              <PickupAddress
                classNames={{
                  root: 'border-0 max-w-[66%] md:pb-[54px] py-8 px-0',
                }}
              />
              <div>
                <h3 className='mb-3 text-lg/[23.4px] font-medium md:mb-5'>
                  Час отримання замовлення
                </h3>
                <p className='text-sm/[18.2px]'>
                  {order.orderDetail.date} з 14-00 до 20-00
                </p>
              </div>
            </div>
          ) : (
            <div className='mt-8 flex flex-col gap-8 md:mt-0'>
              <div>
                <h3 className='mb-3 text-lg/[23.4px] font-medium md:mb-5 xl:text-[26px]/[31.47px]'>
                  Адреса замовлення
                </h3>
                <p className='text-sm/[18.2px] xl:text-base/[20.8px]'>
                  {formatDeliveryString(order.deliveryAdress)}
                </p>
              </div>
              <div>
                <h3 className='mb-3 text-lg/[23.4px] font-medium md:mb-5 xl:text-[26px]/[31.47px]'>
                  Час доставки
                </h3>
                <p className='text-sm/[18.2px] xl:text-base/[20.8px]'>
                  Протягом 1 - 2 годин з моменту оформлення замовлення.
                </p>
              </div>
            </div>
          )}
          <div className='xl:min-w-[630px]'>
            <h3 className='mt-8 text-[18px] font-medium md:mt-0 xl:text-[26px]/[31.47px]'>
              Ваше замовлення
            </h3>
            <div className='flex flex-col gap-4 pt-5 md:pt-[28px]'>
              {order.orderItems.map((item, index) => (
                <div
                  key={index}
                  className='border-b border-b-primary xl:flex xl:items-center xl:justify-between xl:pb-4'
                >
                  <OrderItemCard
                    image={item.dish.image}
                    title={item.dish.title}
                    ingredients={
                      data?.reduce(
                        (acc, prev) => {
                          item.orderItemIngredients.forEach(itemIngredient => {
                            if (prev.id === itemIngredient.id) {
                              acc.push({
                                ...prev,
                                count: itemIngredient.quantity,
                              })
                            }
                          })

                          return acc
                        },
                        [] as (Ingredient & { count: number })[],
                      ) || []
                    }
                  />
                  <div className='flex items-center justify-between py-4 font-medium xl:gap-[90px]'>
                    <p className='text-base/[20.8px]'>1 шт</p>
                    <p className='text-xl/[26px]'>{item.dish.price}₴</p>
                  </div>
                </div>
              ))}
            </div>
            <OrderSummary
              classNames={{
                root: 'pt-10 ml-auto',
              }}
              totalPrice={order.totalPrice}
              summaryText='Товарів на суму:'
              showDelivery={!order.pickup}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
