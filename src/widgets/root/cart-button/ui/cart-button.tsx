'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UAHFormatter } from '@/shared/ui/uah-formatter'
import { ShoppingCart, X } from 'lucide-react'

import { CartItemEditable } from '@/features/root/edit-cart'
import { useCartStore } from '@/entities/cart'
import { ScrollArea } from '@/shared/ui/common/scroll-area'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/common/sheet'
import { cn } from '@/shared/lib/utils'
import { Indicator } from './indicator'

export const CartButton = () => {
  const { opened, cart, totalPrice, totalCount, toggleCartDrawer } =
    useCartStore(state => state)

  const path = usePathname()

  return (
    <Sheet open={opened} onOpenChange={toggleCartDrawer}>
      <SheetTrigger
        aria-hidden='true'
        className={cn('btn-icon', 'relative size-11 md:hidden')}
      >
        <Indicator value={totalCount} className='-top-1' />
        <ShoppingCart className='size-6 stroke-[1.5px]' />
      </SheetTrigger>
      <SheetTrigger
        aria-hidden='true'
        className='hidden items-center gap-5 rounded-[20px] border border-primary-light/50 bg-white px-8 py-1.5 text-black transition-colors duration-300 hover:border-primary-light md:flex'
      >
        <span className='relative flex h-[34px] items-end'>
          <Indicator value={totalCount} />
          <ShoppingCart className='size-6 stroke-[1.5px]' />
        </span>
        <UAHFormatter value={totalPrice} />
      </SheetTrigger>

      <SheetContent
        aria-describedby={undefined}
        side='right'
        className='grid h-screen w-[390px] grid-rows-[auto_1fr_auto] p-6 pb-11 md:w-[482px] md:gap-8 md:px-10 md:py-8 xl:w-[522px] xl:px-[60px]'
      >
        <SheetHeader>
          <SheetTitle className='relative border-b border-primary-light pb-[12.5px] pt-[4.5px]'>
            <p className='relative text-[26px]/[31.47px] font-medium'>
              <span>Кошик</span>
              <SheetClose
                aria-hidden='true'
                className='absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center text-gray-700 transition-colors duration-300 hover:text-black'
              >
                <X className='size-8 stroke-[1.5px]' />
              </SheetClose>
            </p>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea type='scroll' className='landscape:min-h-[160px]'>
          {cart.length > 0 && (
            <ul className='grid grid-cols-1 gap-4 md:gap-6'>
              {cart.map(item => (
                <li key={item.id}>
                  <CartItemEditable item={item} />
                </li>
              ))}
            </ul>
          )}
        </ScrollArea>

        <SheetFooter className='space-y-10 md:space-y-8'>
          <p className='flex items-baseline justify-between py-4 font-medium md:py-3'>
            <span className='text-lg/[23.4px]'>Всього:</span>
            <UAHFormatter value={totalPrice} className='text-xl/[26px]' />
          </p>
          <div className='space-y-8'>
            <Link
              href='/checkout'
              className={cn(
                'btn-primary',
                path === '/checkout' &&
                  'pointer-events-none border-gray-700 bg-gray-600',
              )}
            >
              Оформити замовлення
            </Link>
            <SheetClose aria-hidden='true' className='btn-secondary'>
              Повернутися до покупок
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
