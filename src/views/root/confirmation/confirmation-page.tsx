'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { OrderSummary } from '@/shared/ui/order-summary'
import { PickupAddress } from '@/shared/ui/pickup-address'
import axios from 'axios'

import { ControlledFields } from '@/widgets/root/checkout-form/model'
import { CartItem, useCartStore } from '@/entities/cart'
import { CreateOrder, Order, orderService } from '@/entities/order'
import { OrderItemCard } from '@/entities/order/ui/order-item-card'
import { KEYS } from '@/shared/constants'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'
import { formatDeliveryString } from './lib/format-delivery-string'

export const ConfirmationPage = () => {
  const params = useSearchParams()
  const pickup = params.get('pickup')
  const router = useRouter()
  const [succededOrder, setSuccededOrder] = useState<Order | null>(null)
  const { cart, totalPrice, clearCart } = useCartStore(state => state)
  const [cartItems, setCartItems] = useState<{
    items: CartItem[]
    totalPrice: number
  }>({ items: cart, totalPrice })

  const liqpayId = globalThis.localStorage?.getItem
    ? `${globalThis.localStorage.getItem(KEYS.liqpayId)}`
    : ''

  useEffect(() => {
    if (cart && !cartItems.items.length) {
      setCartItems({ items: cart, totalPrice })
    }
  }, [cart, totalPrice])

  useEffect(() => {
    if (liqpayId.trim() && cart.length) {
      ;(async () => {
        try {
          const request = await axios.post(
            '/api/status',
            {
              orderId: liqpayId,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )

          const res = await request.data.result

          if (res.status !== 'success') {
            let message: string = ''

            if (res.err_code === '9859') {
              message = 'Недостатньо коштів'
            } else if (res.err_code === 'limit') {
              message = 'Перевищено ліміт на переказ коштів'
            }

            if (message.length > 0) {
              router.replace(`/checkout?error=${message}`)
            } else {
              router.replace('/menu')
            }
          } else {
            const confirmedOrder = JSON.parse(res.info) as {
              details: ControlledFields
            }

            let date: string = ''
            if (confirmedOrder.details.deliveryDate === 'today') {
              const currentDate = new Date()
              const parsed = `${currentDate.toLocaleString('ua-UA', {
                dateStyle: 'short',
              })} - ${currentDate.toLocaleString('ua-UA', {
                weekday: 'short',
              })}`

              date = parsed
            } else {
              date = confirmedOrder.details.deliveryDate
            }

            const payload: CreateOrder = {
              items: cart.map(item => ({
                dishId: item.dish.id,
                ingridients: item.ingredients.map(ingr => ({
                  ingridientId: ingr.id,
                  quanttity: ingr.count,
                })),
              })),
              pickup: !!pickup,
              deliveryDetails: {
                buildingNumber:
                  Number(confirmedOrder.details.buildingNumber) || 1,
                city: 'Київ',
                street: !!pickup ? 'pickup' : confirmedOrder.details.street,
                entrance: Number(confirmedOrder.details.entrance) || 1,
                flatNumber: Number(confirmedOrder.details.appartmentHouse) || 1,
                floor: Number(confirmedOrder.details.story) || 1,
                intercomCode: confirmedOrder.details.intercom || 'немає',
              },
              orderDetails: {
                payType: 'картою',
                date,
                email: `${confirmedOrder.details.email}`,
                phone: confirmedOrder.details.phone,
                comment: confirmedOrder.details.comment,
                changeFrom: 0,
                noChange: true,
                name: `${confirmedOrder.details.name}`,
              },
            }

            const succededOrder = await orderService.createOrder(payload)
            setSuccededOrder(succededOrder)

            if (globalThis.localStorage)
              globalThis.localStorage.removeItem(KEYS.liqpayId)

            // Clear the cart
            clearCart()
          }
        } catch (err) {
          console.error('Error fetching order status:', err)
        }
      })()
    }
  }, [liqpayId, cart.length])

  if (!succededOrder)
    return (
      <div className='page-wrap'>
        <div className='container flex items-center justify-center'>
          <Image
            src='/gifs/loading.gif'
            width={150}
            height={150}
            alt='Loading...'
            unoptimized
          />
        </div>
      </div>
    )

  return (
    <>
      <div className='page-wrap'>
        <div className='container'>
          <h2 className='text-center text-[22px] font-medium text-primary md:text-[32px]/[41.6px] md:tracking-[3%] xl:px-72'>
            Вітаємо, Ваше замовлення №{succededOrder.number} успішно оформлено!
          </h2>
          <div className='md:mt-10 md:flex md:justify-between xl:mt-[73px]'>
            {succededOrder.pickup ? (
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
                    {succededOrder.orderDetail.date} з 14-00 до 20-00
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
                    {formatDeliveryString({
                      houseNumber: String(
                        succededOrder.deliveryAdress.buildingNumber,
                      ),
                      street: succededOrder.deliveryAdress.street,
                    })}
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
                {cartItems.items.map((item, index) => (
                  <div
                    key={index}
                    className='border-b border-b-primary xl:flex xl:items-center xl:justify-between xl:pb-4'
                  >
                    <OrderItemCard
                      image={item.dish.image || img_placeholder.src}
                      title={item.dish.title}
                      ingredients={item.ingredients}
                    />
                    <div className='flex items-center justify-between py-4 font-medium xl:gap-[90px]'>
                      <p className='text-base/[20.8px]'>{item.count} шт</p>
                      <p className='text-xl/[26px]'>{item.dish.price}₴</p>
                    </div>
                  </div>
                ))}
              </div>
              <OrderSummary
                classNames={{
                  root: 'pt-10 ml-auto',
                }}
                totalPrice={cartItems.totalPrice}
                summaryText='Товарів на суму:'
                showDelivery={!succededOrder.pickup}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
