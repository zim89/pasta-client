'use client'

import { useEffect, useMemo, useState } from 'react'
import type { Dish } from '@/types/dish.types'
import { X } from 'lucide-react'
import Image from 'next/image'
import { BrandButton } from '@/components/brandButton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { formatMass } from '@/helpers/newDishes.helpers'
import { initIngredients } from '@/helpers/productCard.helpers'
import { Ingredients } from './Ingredients'

export const ProductCard = ({
  dish,
  className = ''
}: {
  dish: Dish
  className?: string
}) => {
  const [opened, setOpened] = useState(false)

  // const [ingredients, setIngredients] = useState<{
  //   [P in string]: {
  //     count: number
  //     price: number
  //   }
  // }>(initIngredients(dish.ingredients))

  // Remove the side scrollbar
  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [opened])

  // useEffect(() => {
  //   setIngredients(initIngredients(dish.ingredients))
  // }, [dish.name, dish.ingredients.length])

  // const extraCost = useMemo(() => {
  //   let cost = 0
  //   for (const name in ingredients) {
  //     cost += (ingredients[name].count || 0) * (ingredients[name].price || 0)
  //   }

  //   return cost
  // }, [ingredients])

  // const handleClear = () => {
  //   setIngredients(initIngredients(dish.ingredients))
  // }

  // const handleChangeQuantity = (
  //   action: 'DECREASE' | 'INCREASE',
  //   ingredient: string
  // ) => {
  //   setIngredients(prev => ({
  //     ...prev,
  //     [ingredient]: {
  //       count:
  //         action === 'DECREASE'
  //           ? Math.max(prev[ingredient].count - 1, 0)
  //           : prev[ingredient].count + 1,
  //       price: prev[ingredient].price
  //     }
  //   }))
  // }

  return (
    <Card
      className={cn(
        'overflow-clip rounded-[30px] border-primary-light',
        className
      )}
      data-testid='product-card'
    >
      <CardHeader className='relative aspect-[5/3.8417] '>
        <Image
          src={dish.image}
          fill
          sizes='100%'
          alt={dish.title}
          data-testid='product-card-surface-image'
        />
      </CardHeader>
      <CardContent className='p-4'>
        <h4
          className='text-xl font-medium'
          data-testid='product-card-name'
        >
          {dish.title}
        </h4>
        <p
          className='my-6 text-justify text-sm'
          data-testid='product-card-desc'
        >
          {dish.composition}
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-8'>
            {dish.weight && (
              <span
                className='text-sm opacity-70'
                data-testid='product-card-mass'
              >
                Вага: {formatMass(dish.weight)}
              </span>
            )}
            <span
              className='text-[1.625rem]/[1.967rem] font-medium text-black'
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
                'fixed left-0 top-14 z-50 h-full w-full overflow-y-auto rounded-[20px] bg-white p-8 font-medium transition-all duration-500 md:max-w-[700px] md:translate-x-12 xl:left-2/4 xl:max-h-[591px] xl:max-w-[1088px] xl:-translate-x-2/4',
                opened
                  ? '-translate-y-14 opacity-100 xl:-translate-y-0'
                  : 'translate-y-[-1000px] opacity-80 transition-transform duration-500'
              )}
              data-testid='modal-content'
            >
              {/* Close button */}
              <X
                size={32}
                className='mb-3 ml-auto cursor-pointer text-grey'
                onClick={setOpened.bind(null, false)}
                data-testid='modal-close-button'
              />

              <div className='mx-auto max-w-max md:flex md:flex-row-reverse md:gap-6'>
                {/* Ingredients Grid */}
                {/* <Ingredients */}
                {/* ingredients={} */}
                {/* ingredientsQuantity={} */}
                {/* handleChangeQuantity={} */}
                {/* /> */}
                {/* End Ingredients Grid */}

                {/* Product Preview and Controllers */}
                <div className='mt-5 flex flex-1 flex-col gap-5 border-t border-t-primary-light py-4 md:m-0 md:border-0 md:p-0'>
                  <div className='flex items-center justify-between gap-6 md:flex-col-reverse'>
                    <div className='md:text-center'>
                      <p
                        className='text-[1.125rem]/[1.463rem] font-semibold'
                        data-testid='modal-preview-name'
                      >
                        {dish.title}
                      </p>
                      <p
                        className='mb-3 mt-5 text-[1.625rem] font-semibold'
                        data-testid='modal-preview-total'
                      >
                        {/* {(dish.price + extraCost).toFixed(1)}₴ */}
                      </p>
                    </div>

                    <div className='relative ml-auto min-h-[100px] min-w-[100px] md:min-h-[200px] md:min-w-[200px] xl:min-h-[240px] xl:min-w-[240px]'>
                      <Image
                        className='h-full w-full rounded-lg object-cover'
                        src={dish.image}
                        fill
                        alt={dish.title}
                        data-testid='modal-preview-image'
                      />
                    </div>
                  </div>

                  {/* Mobile controllers */}
                  <BrandButton
                    className='xl:hidden'
                    kind='outlined'
                    // onClick={() => handleClear()}
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
              <div className='container hidden justify-end gap-10 px-64 xl:flex'>
                <BrandButton
                  className='w-56'
                  kind='outlined'
                  // onClick={() => handleClear()}
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
