import { CartItem } from '@/entities/cart'
import { OrderField } from '@/entities/order'
import { SliderOrderFields } from './slider-order-fields'

type Props = {
  cart: CartItem[]
  decrementItem: (id: string) => void
  incrementItem: (id: string) => void
  removeFromCart: (id: string) => void
}

export const OrderFields = ({
  cart,
  decrementItem,
  incrementItem,
  removeFromCart,
}: Props) => {
  const removeOrderItem = (id: string) => {
    removeFromCart(id)
  }

  const changeQuantity = (op: 'INCREASE' | 'DECREASE', id: string) => {
    if (op === 'INCREASE') {
      incrementItem(id)
    } else {
      decrementItem(id)
    }
  }

  return (
    <div>
      {cart.map(order => (
        <OrderField
          key={order.id}
          item={order}
          removeDish={removeOrderItem}
          changeQuantity={changeQuantity}
        />
      ))}
    </div>
  )
}
