import Image from 'next/image'
import { Button } from '@/components/ui/button'
import img from '@/assets/icons/features/feat3_sm.svg'
import { formatMass } from '@/helpers/newDishes.helpers'
import classes from '../classes.module.css'
import { Dish } from '@/data/menu.data'

type Props = {
  ingredients: Dish['ingredients']
  ingredientsQuantity: { [P in string]: { count: number; price: number } }
  handleChangeQuantity: (
    action: 'DECREASE' | 'INCREASE',
    ingredient: string
  ) => void
}

export const Ingredients = ({
  ingredients,
  ingredientsQuantity,
  handleChangeQuantity
}: Props) => {
  return (
    <div className={classes.ingredients}>
      {ingredients.map((ingr, index) => {
        return (
          <div
            key={index}
            className='bg-white p-1 rounded-lg'
          >
            <h3 className='font-semibold capitalize mb-2 xl:hidden'>
              {ingr.name}
            </h3>
            <div className='flex justify-center gap-1 xl:gap-3 items-center'>
              <div className='relative xl:flex xl:items-center xl:flex-col h-16 w-16 xl:h-[68px] xl:w-[68px]'>
                <Image
                  src={img.src}
                  fill
                  alt={ingr.name}
                  className='rounded-lg -mt-3'
                />
                {!!ingredientsQuantity[ingr.name]?.count && (
                  <span className='hidden xl:block text-xs mt-[100%]'>
                    {ingredientsQuantity[ingr.name].count} х {ingr.price}₴
                  </span>
                )}
              </div>
              <div className='text-xs'>
                <h3 className='font-semibold capitalize mb-2 hidden xl:block'>
                  {ingr.name}
                </h3>
                <span className='block whitespace-nowrap'>
                  {formatMass(ingr.mass)}
                </span>
                {!!ingredientsQuantity[ingr.name]?.count ? (
                  <span className='xl:hidden text-xs'>
                    {ingredientsQuantity[ingr.name].count} х {ingr.price}₴
                  </span>
                ) : (
                  <span className='xl:hidden text-xs'>0 х {ingr.price}₴</span>
                )}

                <div className='gap-2 items-center justify-center mt-3 hidden xl:flex xl:mt-7'>
                  <Button
                    className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                    onClick={() => handleChangeQuantity('DECREASE', ingr.name)}
                  >
                    -
                  </Button>
                  {ingredientsQuantity[ingr.name] != null && (
                    <span className='flex items-center justify-center border border-black border-opacity-10 p-0 w-8 h-8 rounded-lg'>
                      {ingredientsQuantity[ingr.name].count}
                    </span>
                  )}

                  <Button
                    className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                    onClick={() => handleChangeQuantity('INCREASE', ingr.name)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex gap-2 items-center justify-center mt-3 xl:hidden'>
              <Button
                className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                onClick={() => handleChangeQuantity('DECREASE', ingr.name)}
              >
                -
              </Button>
              {ingredientsQuantity[ingr.name]?.count && (
                <span className='flex items-center justify-center border border-black border-opacity-10 p-0 w-8 h-8 rounded-lg'>
                  {ingredientsQuantity[ingr.name].count}
                </span>
              )}
              <Button
                className='border border-black border-opacity-5 p-0 w-8 h-8 rounded-lg'
                onClick={() => handleChangeQuantity('INCREASE', ingr.name)}
              >
                +
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
