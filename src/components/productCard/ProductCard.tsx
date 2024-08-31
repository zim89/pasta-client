import type { Dish } from '@/types/dish.types'
import Image from 'next/image'
import { formatMass } from '@/helpers/newDishes.helpers'
import { BrandButton } from '../brandButton'
import { Card, CardContent, CardHeader } from '../ui/card'
import { HitLabel } from './ui/hit-label'

export const ProductCard = ({ dish }: { dish: Dish }) => {
  return (
    <Card
      className='relative w-full overflow-clip rounded-[30px] border-primary-light/50'
      data-testid='product-card'
    >
      <CardHeader className='relative aspect-[5/3.8417]'>
        <Image
          src={dish.image ? dish.image : 'https://placehold.co/600x400.png'}
          fill
          sizes='100%'
          alt={dish.title}
          className='object-cover'
          data-testid='product-card-surface-image'
        />
      </CardHeader>
      <CardContent className='p-4'>
        <h4
          className='mb-1 h-[46px] text-xl/[26px] font-medium'
          data-testid='product-card-name'
        >
          <span> {dish.title}</span>
        </h4>
        <p
          className='mb-6 line-clamp-2 h-9 text-sm/[18.2px] opacity-70'
          data-testid='product-card-desc'
        >
          {dish.composition}
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-8'>
            <p
              className='text-sm/[18.2px] opacity-70'
              data-testid='product-card-mass'
            >
              Вага: {formatMass(dish.weight)}
            </p>
            <p
              className='text-[26px]/[31.47px] font-medium'
              data-testid='product-card-price'
            >
              {dish.price.toFixed(0)}₴
            </p>
          </div>

          <div className='flex flex-col gap-4 xl:gap-5'>
            <BrandButton
              kind='outlined'
              role='modal-button'
            >
              Додати інгредієнт
            </BrandButton>

            <BrandButton
              kind='filled'
              role='cart-button'
            >
              До кошика
            </BrandButton>
          </div>
        </div>
      </CardContent>

      {dish.isHit && <HitLabel />}
    </Card>
  )
}
