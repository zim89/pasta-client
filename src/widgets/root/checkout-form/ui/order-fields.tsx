import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common'

import { OrderField } from '@/entities/order-item'
import { OrderForm, OrderItem } from '../model'

type Props = {
  form: OrderForm
}

export const OrderFields = ({ form }: Props) => {
  const changeQuantity = (op: 'INCREASE' | 'DECREASE', id: number) => {
    const candidate = form.values.orderItems.find(item => item.id === id)

    if (candidate) {
      let newValues: OrderItem[] = []

      switch (op) {
        case 'DECREASE':
          newValues = form.values.orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: Math.max(0, dish.quantity - 1),
                }
              : dish,
          )
          break
        case 'INCREASE':
          newValues = form.values.orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: dish.quantity + 1,
                }
              : dish,
          )
          break
      }

      form.setFieldValue('orderItems', newValues)
    }
  }

  const removeOrderItem = (id: number) => {
    const candidate = form.values.orderItems.find(item => item.id === id)
    if (candidate) {
      form.setFieldValue(
        'orderItems',
        form.values.orderItems.filter(item => item.id !== id),
      )
    }
  }

  return (
    <div>
      {form.values.orderItems.length > 3 ? (
        <Carousel
          className='relative'
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
        >
          <CarouselContent>
            {form.values.orderItems.map((_, index) => {
              if (index % 3 === 0)
                return (
                  <CarouselItem key={index}>
                    {form.values.orderItems
                      .slice(index, index + 3)
                      .map(order => (
                        <OrderField
                          key={order.id}
                          item={order}
                          removeDish={removeOrderItem}
                          changeQuantity={changeQuantity}
                        />
                      ))}
                  </CarouselItem>
                )
            })}
          </CarouselContent>
          <div className='my-4 flex h-10 items-center gap-10'>
            <CarouselPrevious
              type='button'
              className='static ml-auto translate-x-0 translate-y-0'
            />
            <CarouselNext
              type='button'
              className='static translate-x-0 translate-y-0'
            />
          </div>
        </Carousel>
      ) : (
        form.values.orderItems.map(order => (
          <OrderField
            key={order.id}
            item={order}
            removeDish={removeOrderItem}
            changeQuantity={changeQuantity}
          />
        ))
      )}
    </div>
  )
}
