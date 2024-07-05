'use client'

import { useEffect, useMemo, useState } from 'react'
import { AlignLeft, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import img from '@/assets/icons/features/feat3_sm.svg'
import { formatMass } from '@/helpers/newDishes.helpers'
import { initIngredients } from '@/helpers/productCard.helpers'
import { BrandButton } from '../brandButton'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Dish } from '@/data/menu.data'

type Props = { dish: Dish; className?: string }
export const ProductCard = ({ dish, className = '' }: Props) => {
  const [opened, setOpened] = useState(false)

  const [ingredients, setIngredients] = useState<{ [P in string]: number }>(
    initIngredients(dish.ingredients)
  )

  // Remove the side scrollbar
  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [opened])

  const extraCost = useMemo(() => {
    let cost = 0
    for (const name in ingredients) {
      cost += ingredients[name] * 50
    }

    return cost
  }, [ingredients])

  const handleClear = () => {
    setIngredients(initIngredients(dish.ingredients))
  }

  return (
    <Card
      className={cn(
        'border-primary-light rounded-[30px] overflow-clip',
        className
      )}
    >
      <CardHeader className='relative aspect-[5/3.8417] '>
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
            <BrandButton
              kind='outlined'
              onClick={() => setOpened(!opened)}
            >
              Додати інгредієнт
            </BrandButton>

            <div
              className={cn(
                'fixed p-8 left-0 top-14 rounded-[20px] w-full h-full z-50 font-medium bg-light transition-all duration-500 overflow-y-auto',
                opened
                  ? '-translate-y-14 opacity-100'
                  : 'translate-y-[-1000px] transition-transform duration-500 opacity-80'
              )}
            >
              {/* Close button */}
              <X
                size={32}
                className='text-grey ml-auto cursor-pointer mb-3'
                onClick={setOpened.bind(null, false)}
              />
              {/* Ingredients */}
              <div className='md:flex md:flex-row-reverse md:gap-6'>
                <div className='grid grid-cols-2 md:grid-cols-3 items-center md:items-start gap-x-9 gap-y-4'>
                  {dish.ingredients.map((ingr, index) => {
                    return (
                      <div
                        key={index}
                        className='bg-white p-1 rounded-lg'
                      >
                        <h3 className='font-semibold capitalize mb-2'>
                          {ingr}
                        </h3>
                        <div className='flex justify-center gap-1 items-center'>
                          <Image
                            src={img.src}
                            width={64}
                            height={64}
                            alt={ingr}
                            className='rounded-lg'
                          />
                          <div className='text-xs'>
                            <span className='block whitespace-nowrap'>
                              {formatMass(799)}
                            </span>
                            <span>{ingredients[ingr]} х 50₴</span>
                          </div>
                        </div>
                        <div className='flex gap-2 items-center justify-center mt-3'>
                          <Button
                            className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                            onClick={() =>
                              setIngredients(prev => ({
                                ...prev,
                                [ingr]: Math.max(prev[ingr] - 1, 0)
                              }))
                            }
                          >
                            -
                          </Button>
                          <span className='flex items-center justify-center border border-black border-opacity-10 p-0 w-8 h-8 rounded-lg'>
                            {ingredients[ingr]}
                          </span>
                          <Button
                            className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                            onClick={() =>
                              setIngredients(prev => ({
                                ...prev,
                                [ingr]: prev[ingr] + 1
                              }))
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className='flex flex-col flex-1 py-4 gap-5 mt-7 md:m-0 md:p-0 border-t border-t-primary-light md:border-0'>
                  <div className='flex gap-4 items-center justify-between md:flex-col-reverse'>
                    <div className='md:text-center my-6'>
                      <p className='text-[18px]/[23.4px] mb-5 font-semibold'>
                        {dish.name}
                      </p>
                      <p className='text-[26px] font-semibold'>
                        {dish.price + extraCost}₴
                      </p>
                    </div>
                    <div className='w-full'>
                      <div className='relative w-full h-full min-w-[100px] min-h-[100px] md:min-w-[200px] md:min-h-[200px]'>
                        <Image
                          className='rounded-lg'
                          src={dish.imageSrc}
                          fill
                          alt={dish.name}
                        />
                      </div>
                    </div>
                  </div>
                  <BrandButton
                    kind='outlined'
                    onClick={() => handleClear()}
                  >
                    Очистити
                  </BrandButton>
                  <BrandButton kind='filled'>Додати</BrandButton>
                </div>
              </div>
            </div>
            <BrandButton kind='filled'>До кошика</BrandButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
