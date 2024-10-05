import { OrderField, OrderItem } from '@/entities/order'
import { OrderForm } from '../model'
import { SliderOrderFields } from './slider-order-fields'

type Props = {
  form: OrderForm
}

export const OrderFields = ({ form }: Props) => {
  const orderItems = form.getValues().orderItems

  const changeQuantity = (op: 'INCREASE' | 'DECREASE', id: string) => {
    const candidate = orderItems.find(item => item.id === id)

    if (candidate) {
      let newValues: OrderItem[] = []

      switch (op) {
        case 'DECREASE':
          newValues = orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: Math.max(0, dish.count - 1),
                }
              : dish,
          )
          break
        case 'INCREASE':
          newValues = orderItems.map(dish =>
            dish.id === id
              ? {
                  ...dish,
                  quantity: dish.count + 1,
                }
              : dish,
          )
          break
      }

      form.setValue('orderItems', newValues)
    }
  }

  const removeOrderItem = (id: string) => {
    const candidate = orderItems.find(item => item.id === id)
    if (candidate) {
      form.setValue(
        'orderItems',
        orderItems.filter(item => item.id !== id),
      )
    }
  }

  return (
    <div>
      {orderItems.length > 3 ? (
        <SliderOrderFields
          orders={orderItems}
          removeDish={removeOrderItem}
          changeQuantity={changeQuantity}
        />
      ) : (
        orderItems.map(order => (
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
