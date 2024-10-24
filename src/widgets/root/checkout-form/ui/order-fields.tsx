import { SquarePen } from 'lucide-react'

import { EditIngredient } from '@/features/root/add-ingredient'
import { DeleteOrderItem } from '@/features/root/delete-order-item'
import { CartItem } from '@/entities/cart'
import { OrderField } from '@/entities/order'

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
          changeQuantity={changeQuantity}
          editable
          deleteOrderItemSlot={
            <DeleteOrderItem item={order} removeDish={removeOrderItem} />
          }
          editIngredientSlot={
            <EditIngredient
              triggerButton={
                <SquarePen
                  className='text-primary-light'
                  strokeWidth={1}
                  size={20}
                />
              }
              item={order}
            />
          }
        />
      ))}
    </div>
  )
}
