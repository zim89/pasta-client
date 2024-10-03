import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/common'
import { useQuery } from '@tanstack/react-query'
import { SquarePen, X } from 'lucide-react'

import type { CartItem } from '@/entities/cart'
import { ingredientService } from '@/entities/ingredient'
import { QUERY_KEYS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { IngredientFormEdit } from './ingredient-form-edit'

export const EditIngredient = ({ item }: { item: CartItem }) => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.INGREDIENTS],
    queryFn: () => ingredientService.getAll(),
  })

  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          disabled={item.dish.customizable === false}
          className='btn-text-primary'
        >
          <span>Редагувати</span>
          <SquarePen className='size-5 stroke-[1.5px]' />
        </DialogTrigger>

        <DialogContent
          onInteractOutside={() => setOpen(false)}
          aria-describedby={undefined}
          className='top-0 max-w-screen-sm translate-y-0 rounded-2.5xl border-0 p-8 pt-16 md:top-[5%] md:max-w-[730px] md:rounded-4xl md:px-6 md:pt-[72px] xl:top-1/2 xl:max-w-[1055px] xl:-translate-y-1/2 xl:p-12 xl:pt-24'
        >
          <DialogHeader className='hidden'>
            <DialogTitle>Додати інгредієнти</DialogTitle>
          </DialogHeader>
          <DialogClose
            aria-hidden='true'
            className={cn(
              'btn-close',
              'absolute right-8 top-5 md:right-6 md:top-6 xl:right-12 xl:top-8',
            )}
          >
            <X className='size-8 stroke-[1.5px]' />
          </DialogClose>

          {data && !isLoading && (
            <IngredientFormEdit data={data} item={item} setOpen={setOpen} />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

// return (
//     <button className='btn-text-primary'>
//       <span>Редагувати</span>
//       <SquarePen className='size-5 stroke-[1.5px]' />
//     </button>
// )
