import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatMass } from '@/helpers/newDishes.helpers'
import { NewDish } from '@/data/newDishes.data'

type Props = { dish: NewDish }

export const Card = ({ dish }: Props) => {
  return (
    <div className='flex rounded-xl border border-primary-light overflow-clip w-full'>
      <div className='relative w-full max-w-[135px] xl:max-w-[160px] min-h-[159px]'>
        <Image
          src={dish.poster}
          fill
          style={dish.additionalStyles}
          className='object-cover'
          alt={dish.name}
        />
      </div>
      <div className='m-4'>
        <h3 className='text-sm font-semibold'>{dish.name}</h3>
        <span className='inline-block text-sm my-3 opacity-70'>
          Вага: {formatMass(dish.mass)}
        </span>
        <div className='flex items-center justify-between'>
          <span className='font-semibold text-[22px]'>{dish.price}₴</span>
          <Button className='bg-primary-light rounded-full p-2 text-white'>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
