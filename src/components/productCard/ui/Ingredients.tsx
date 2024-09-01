import { Ingredient as TIngredient } from '@/types/dish.types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import img from '@/assets/icons/features/feat3_sm.svg'
import classes from '../classes.module.css'

export type Props = {
  ingredients: TIngredient[]
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
    <div
      className={classes.ingredients}
      data-testid='ingredients-container'
    >
      {ingredients.map((ingr, index) => (
        <Ingredient
          key={index}
          handleChangeQuantity={handleChangeQuantity}
          ingredient={ingr}
          ingredientsQuantity={ingredientsQuantity}
        />
      ))}
    </div>
  )
}

export type ItemProps = {
  ingredientsQuantity: Props['ingredientsQuantity']
  handleChangeQuantity: Props['handleChangeQuantity']
  ingredient: Props['ingredients'][number]
}

// Be aware that each section of an ingredient has it's own markup for each screen size
// Look at data-testids for navigation:

// For ingredient's name attribute there are: ingredient-name-mobile, ingredient-name-laptop
// For ingredient's image there is: ingredient-image
// For ingredient's price there are: ingredient-price-laptop, ingredient-price-mobile
// For ingredient's mass there is: ingredient-mass
// For ingredient's count there are: ingredient-count-mobile, ingredient-count-laptop
// For increase quantity button: increase-btn-laptop, increase-btn-mobile
// For decrease quantity button: decrease-btn-laptop, decrease-btn-mobile

export const Ingredient = ({
  handleChangeQuantity,
  ingredient: ingr,
  ingredientsQuantity
}: ItemProps) => {
  return (
    <div className='rounded-lg bg-white p-1'>
      {/* Ingredient's price for smaller screens */}
      <h3
        className='mb-2 font-semibold capitalize xl:hidden'
        data-testid='ingredient-name-mobile'
      >
        {ingr.name}
      </h3>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className='flex items-center justify-center gap-1 xl:gap-3'>
        <div className='relative h-16 w-16 xl:flex xl:h-[68px] xl:w-[68px] xl:flex-col xl:items-center'>
          {/* TODO: add images for each ingredient, and don't forget to update the specific test case for this */}
          <Image
            src={img.src}
            fill
            alt={ingr.name}
            className='-mt-3 rounded-lg'
            data-testid='ingredient-image'
          />
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {/* Ingredient's price for big screens */}
          {!!ingredientsQuantity[ingr.name]?.count && (
            <span
              className='mt-[100%] hidden text-xs xl:block'
              data-testid='ingredient-price-laptop'
            >
              {ingredientsQuantity[ingr.name].count} х {ingr.price}₴
            </span>
          )}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        </div>
        <div className='mt-6 text-xs'>
          {/* Ingredient's name for big screens */}
          <h3
            className='mb-2 hidden font-semibold capitalize xl:block'
            data-testid='ingredient-name-laptop'
          >
            {ingr.name}
          </h3>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {/* <span
            className='block whitespace-nowrap'
            data-testid='ingredient-mass'
          >
            {formatMass(ingr.mass)}
          </span> */}

          {/* Ingredient's price for mobile screens */}
          {!!ingredientsQuantity[ingr.name]?.count ? (
            <span
              className='text-xs xl:hidden'
              data-testid='ingredient-price-mobile'
            >
              {ingredientsQuantity[ingr.name].count} х {ingr.price}₴
            </span>
          ) : (
            <span
              className='text-xs xl:hidden'
              data-testid='ingredient-price-mobile'
            >
              0 х {ingr.price}₴
            </span>
          )}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {/* Change quantity buttons for big screens */}
          <div className='mt-3 hidden items-center justify-center gap-2 xl:mt-7 xl:flex'>
            <Button
              className='h-8 w-8 rounded-lg border border-black border-opacity-5 p-0'
              onClick={() => handleChangeQuantity('DECREASE', ingr.name)}
              data-testid='decrease-btn-laptop'
            >
              -
            </Button>
            {ingredientsQuantity[ingr.name] != null && (
              <span
                className='flex h-8 w-8 items-center justify-center rounded-lg border border-black border-opacity-10 p-0'
                data-testid='ingredient-count-laptop'
              >
                {ingredientsQuantity[ingr.name].count}
              </span>
            )}

            <Button
              className='h-8 w-8 rounded-lg border border-black border-opacity-5 p-0'
              onClick={() => handleChangeQuantity('INCREASE', ingr.name)}
              data-testid='increase-btn-laptop'
            >
              +
            </Button>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        </div>
      </div>

      {/* Change quantity buttons for smaller screens */}
      <div className='mt-3 flex items-center justify-center gap-2 xl:hidden'>
        <Button
          className='h-8 w-8 rounded-lg border border-black border-opacity-5 p-0'
          onClick={() => handleChangeQuantity('DECREASE', ingr.name)}
          data-testid='decrease-btn-mobile'
        >
          -
        </Button>
        {ingredientsQuantity[ingr.name]?.count != null && (
          <span
            className='flex h-8 w-8 items-center justify-center rounded-lg border border-black border-opacity-10 p-0'
            data-testid='ingredient-count-mobile'
          >
            {ingredientsQuantity[ingr.name].count}
          </span>
        )}
        <Button
          className='h-8 w-8 rounded-lg border border-black border-opacity-5 p-0'
          onClick={() => handleChangeQuantity('INCREASE', ingr.name)}
          data-testid='increase-btn-mobile'
        >
          +
        </Button>
      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
    </div>
  )
}
