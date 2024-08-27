'use client'

import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { formatMass } from '@/helpers/newDishes.helpers'
import { initIngredients } from '@/helpers/productCard.helpers'
import { BrandButton } from '../brandButton'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Ingredients } from './ui/Ingredients'
import { Dish } from '@/data/menu.data'

type Props = { dish: Dish; className?: string }
export const ProductCard = ({ dish, className = '' }: Props) => {
  const [opened, setOpened] = useState(false)

  const [ingredients, setIngredients] = useState<{
    [P in string]: {
      count: number
      price: number
    }
  }>(initIngredients(dish.ingredients))

  // Remove the side scrollbar
  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [opened])

  useEffect(() => {
    setIngredients(initIngredients(dish.ingredients))
  }, [dish.name, dish.ingredients.length])

  const extraCost = useMemo(() => {
    let cost = 0
    for (const name in ingredients) {
      cost += (ingredients[name].count || 0) * (ingredients[name].price || 0)
    }

    return cost
  }, [ingredients])

  const handleClear = () => {
    setIngredients(initIngredients(dish.ingredients))
  }

  const handleChangeQuantity = (
    action: 'DECREASE' | 'INCREASE',
    ingredient: string
  ) => {
    setIngredients(prev => ({
      ...prev,
      [ingredient]: {
        count:
          action === 'DECREASE'
            ? Math.max(prev[ingredient].count - 1, 0)
            : prev[ingredient].count + 1,
        price: prev[ingredient].price
      }
    }))
  }

  return (
    <Card
      className={cn(
        'border-primary-light rounded-[30px] overflow-clip',
        className
      )}
      data-testid='product-card'
    >
      <CardHeader className='relative aspect-[5/3.8417] '>
        <Image
          src={dish.imageSrc}
          fill
          sizes='100%'
          alt={dish.name}
          data-testid='product-card-surface-image'
        />
      </CardHeader>
      <CardContent className='p-4'>
        <h4
          className='text-xl font-medium'
          data-testid='product-card-name'
        >
          {dish.name}
        </h4>
        <p
          className='text-sm text-justify my-6'
          data-testid='product-card-desc'
        >
          {dish.description}
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-8'>
            <span
              className='text-sm opacity-70'
              data-testid='product-card-mass'
            >
              Вага: {formatMass(dish.mass)}
            </span>
            <span
              className='text-[1.625rem]/[1.967rem] text-black font-medium'
              data-testid='product-card-price'
            >
              {dish.price.toFixed(0)}₴
            </span>
          </div>

          {/* Modal Menu */}
          <div className='flex flex-col gap-4 xl:gap-5'>
            <BrandButton
              kind='outlined'
              onClick={() => setOpened(!opened)}
              role='modal-button'
            >
              Додати інгредієнт
            </BrandButton>

            <div
              className={cn(
                'fixed p-8 left-0 xl:left-2/4 xl:-translate-x-2/4 md:translate-x-12 top-14 xl:max-w-[1088px] xl:max-h-[591px] md:max-w-[700px] rounded-[20px] w-full h-full z-50 font-medium bg-white transition-all duration-500 overflow-y-auto',
                opened
                  ? '-translate-y-14 opacity-100 xl:-translate-y-0'
                  : 'translate-y-[-1000px] transition-transform duration-500 opacity-80'
              )}
              data-testid='modal-content'
            >
              {/* Close button */}
              <X
                size={32}
                className='text-grey ml-auto cursor-pointer mb-3'
                onClick={setOpened.bind(null, false)}
                data-testid='modal-close-button'
              />

              <div className='md:flex md:flex-row-reverse md:gap-6 max-w-max mx-auto'>
                {/* Ingredients Grid */}
                <Ingredients
                  ingredients={dish.ingredients}
                  ingredientsQuantity={ingredients}
                  handleChangeQuantity={handleChangeQuantity}
                />
                {/* End Ingredients Grid */}

                {/* Product Preview and Controllers */}
                <div className='flex flex-col flex-1 py-4 gap-5 mt-5 md:m-0 md:p-0 border-t border-t-primary-light md:border-0'>
                  <div className='flex gap-6 items-center justify-between md:flex-col-reverse'>
                    <div className='md:text-center'>
                      <p
                        className='text-[1.125rem]/[1.463rem] font-semibold'
                        data-testid='modal-preview-name'
                      >
                        {dish.name}
                      </p>
                      <p
                        className='text-[1.625rem] font-semibold mt-5 mb-3'
                        data-testid='modal-preview-total'
                      >
                        {(dish.price + extraCost).toFixed(1)}₴
                      </p>
                    </div>

                    <div className='ml-auto relative min-w-[100px] min-h-[100px] md:min-w-[200px] md:min-h-[200px] xl:min-h-[240px] xl:min-w-[240px]'>
                      <Image
                        className='rounded-lg object-cover h-full w-full'
                        src={dish.imageSrc}
                        fill
                        alt={dish.name}
                        data-testid='modal-preview-image'
                      />
                    </div>
                  </div>

                  {/* Mobile controllers */}
                  <BrandButton
                    className='xl:hidden'
                    kind='outlined'
                    onClick={() => handleClear()}
                    role='modal-clear-mobile'
                  >
                    Очистити
                  </BrandButton>
                  <BrandButton
                    className='xl:hidden'
                    kind='filled'
                    role='modal-add-mobile'
                  >
                    Додати
                  </BrandButton>
                  {/* End Mobile controllers */}
                </div>
              </div>
              {/* Laptop controllers*/}
              <div className='hidden xl:flex justify-end container px-64 gap-10'>
                <BrandButton
                  className='w-56'
                  kind='outlined'
                  onClick={() => handleClear()}
                  role='modal-clear-laptop'
                >
                  Очистити
                </BrandButton>
                <BrandButton
                  className='w-56'
                  kind='filled'
                  role='modal-add-laptop'
                >
                  Додати
                </BrandButton>
              </div>
              {/* End Laptop controllers*/}

              {/* End Product Preview and Controllers */}
            </div>
            {/* End Modal Menu */}

            <BrandButton
              kind='filled'
              role='cart-button'
            >
              До кошика
            </BrandButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
