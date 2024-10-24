import Image from 'next/image'

import { Ingredient } from '@/entities/ingredient'

type Props = {
  image: string
  title: string
  editIngredientSlot?: React.ReactNode
  ingredients: (Ingredient & { count: number })[]
}

export const OrderItemCard = ({
  image,
  title,
  editIngredientSlot,
  ingredients,
}: Props) => {
  return (
    <div className='flex w-full gap-3 xl:max-w-[360px] xl:gap-4'>
      <div className='relative h-[90px] w-full max-w-[90px] overflow-hidden rounded-xl xl:h-[104px] xl:max-w-[104px]'>
        <Image
          src={image}
          alt={title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-full text-base/[20.8px] font-medium md:text-[18px]/[23.4px]'>
        <p className='mb-2'>{title}</p>
        <div className='flex flex-col rounded-xl bg-primary-lightest px-3 py-2 text-sm/[18.2px]'>
          <h3 className='mb-1 inline-flex items-center justify-between font-medium'>
            Додаткові інгредієнти:
            {editIngredientSlot ? editIngredientSlot : null}
          </h3>
          <p className='font-normal'>
            {ingredients.length > 0
              ? ingredients.reduce(
                  (acc, prev) =>
                    acc.length
                      ? acc + ', ' + prev.name + ` (${prev.count})`
                      : acc + prev.name + ` (${prev.count})`,
                  '',
                )
              : 'немає'}
          </p>
        </div>
      </div>
    </div>
  )
}
