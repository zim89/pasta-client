'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { X } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'

import type { Dish } from '@/entities/dish'
import { ingredientService } from '@/entities/ingredient'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/common/dialog'
import { QUERY_KEYS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { IngredientForm } from './ingredient-form'
import { IngredientFormDesktop } from './ingredient-form-desktop'

export const AddIngredient = ({
  dish,
  count = 1,
  className = '',
}: {
  dish: Dish
  count?: number
  className?: string
}) => {
  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.INGREDIENTS],
    queryFn: () => ingredientService.getAll(),
  })

  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          disabled={!dish.customizable}
          className={cn('btn-secondary', className)}
        >
          Додати інгредієнти
        </DialogTrigger>

        <DialogContent
          onInteractOutside={() => setOpen(false)}
          aria-describedby={undefined}
          className='top-0 h-screen w-[338px] translate-y-0 rounded-2.5xl border-0 p-8 pt-16 md:top-[5%] md:h-[90%] md:min-w-[714px] md:rounded-4xl md:px-6 md:pt-[72px] xl:top-1/2 xl:h-auto xl:min-w-[1065px] xl:-translate-y-1/2 xl:p-12 xl:pt-24'
        >
          <DialogHeader className='hidden'>
            <DialogTitle>Додати інгредієнти</DialogTitle>
          </DialogHeader>
          <DialogClose
            className={cn(
              'btn-close',
              'absolute right-8 top-5 md:right-6 md:top-6 xl:right-12 xl:top-8',
            )}
          >
            <X className='size-8 stroke-[1.5px]' />
          </DialogClose>

          {data && !isLoading && (
            <>
              {isDesktop ? (
                <IngredientFormDesktop
                  data={data}
                  dish={dish}
                  count={count}
                  setOpen={setOpen}
                />
              ) : (
                <IngredientForm
                  data={data}
                  dish={dish}
                  count={count}
                  setOpen={setOpen}
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
