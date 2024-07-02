import Image from 'next/image'
import { cn } from '@/lib/utils'
import { formatMass } from '@/helpers/newDishes.helpers'
import { BrandButton } from '../brandButton'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Dish } from '@/data/menu.data'

type Props = { dish: Dish; className?: string }
export const ProductCard = ({ dish, className = '' }: Props) => {
  return (
    <Card
      className={cn(
        'overflow-clip border-primary-light rounded-[30px]',
        className
      )}
    >
      <CardHeader className='relative aspect-[5/3.8417]'>
        <Image
          src={dish.imageSrc}
          fill
          sizes='100%'
          alt={dish.name}
        />
      </CardHeader>
      <CardContent className='p-4'>
        <h4 className='text-xl font-medium'>{dish.name}</h4>
        <p className='text-sm text-justify my-6'>{dish.description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-8'>
            <span className='text-sm opacity-70'>
              Вага: {formatMass(dish.mass)}
            </span>
            <span className='text-[26px]/[31.47px] text-black font-medium'>
              {dish.price.toFixed(0)}₴
            </span>
          </div>
          <div className='flex flex-col gap-4 xl:gap-5'>
            <BrandButton kind='outlined'>Додати інгредієнт</BrandButton>
            <BrandButton kind='filled'>До кошика</BrandButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
