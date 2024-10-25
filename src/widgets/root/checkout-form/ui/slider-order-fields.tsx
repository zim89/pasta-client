import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui'

import { DeleteOrderItem } from '@/features/root/delete-order-item'
import { CartItem } from '@/entities/cart'
import { OrderField } from '@/entities/order'

type Props = {
  orders: CartItem[]
  removeDish: (id: string) => void
  changeQuantity: (op: 'INCREASE' | 'DECREASE', id: string) => void
}

export const SliderOrderFields = ({
  orders,
  removeDish,
  changeQuantity,
}: Props) => {
  return (
    <Carousel
      className='relative'
      opts={{
        align: 'start',
        slidesToScroll: 1,
      }}
    >
      <CarouselContent>
        {orders.map((_, index) => {
          if (index % 3 === 0)
            return (
              <CarouselItem key={index}>
                {orders.slice(index, index + 3).map(order => (
                  <OrderField
                    key={order.id}
                    item={order}
                    deleteOrderItemSlot={
                      <DeleteOrderItem item={order} removeDish={removeDish} />
                    }
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
  )
}
