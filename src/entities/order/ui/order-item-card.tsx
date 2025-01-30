import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
  const [extended, setExtended] = useState(false)

  const handleExtend = () => {
    setExtended(!extended)
  }

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
          <h3 className='mb-1 font-medium'>
            <p className='text-base'>Додаткові інгредієнти:</p>
            {editIngredientSlot ? editIngredientSlot : null}
          </h3>
          <p className='font-normal'>
            {ingredients.length > 0
              ? ingredients.slice(0, extended ? Infinity : 3).map(ingr => (
                  <p key={ingr.id} className='odd:py-[6px]'>
                    {ingr.label} - {ingr.count} ({ingr.count * ingr.price} грн)
                  </p>
                ))
              : 'немає'}
          </p>
          <Button
            className='mt-3 flex h-auto items-center self-start p-0 text-primary-light'
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              handleExtend()
            }}
          >
            {extended ? 'Сховати' : 'Показати усі'}
            {extended ? (
              <ChevronUp strokeWidth={1.5} />
            ) : (
              <ChevronDown strokeWidth={1.5} />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
