import Image from 'next/image'
import { DialogDescription } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/common/dialog'
import { cn } from '@/shared/lib/utils'
import decor_img from '@/shared/assets/images/decoration/features-veggies2.png'

export const DeliveryModal = ({ className }: { className?: string }) => {
  return (
    <Dialog>
      <DialogTrigger className={cn('border-b text-lg/[23.4px]', className)}>
        Доставка і оплата
      </DialogTrigger>
      <DialogContent className='w-[342px] max-w-max !rounded-4xl border-0 px-12 pb-[169px] pt-20 md:w-[620px] md:px-14 md:pb-[120px]'>
        <DialogHeader className='hidden'>
          <DialogTitle>Доставка і оплата</DialogTitle>
          <DialogDescription className='hidden'>
            Доставка і оплата
          </DialogDescription>
        </DialogHeader>
        <DialogClose
          aria-hidden='true'
          className={cn('btn-close', 'absolute right-12 top-8 md:right-14')}
        >
          <X className='size-8 stroke-[1.5px]' />
        </DialogClose>
        <div className='md:-bottom- absolute bottom-[47px] right-[42px] h-[90px] w-[99px] md:bottom-[45px] md:right-14 md:h-[116px] md:w-[128px]'>
          <Image
            src={decor_img}
            fill
            sizes='100%'
            alt='Decoration image'
            className='object-cover'
          />
        </div>
        <div className='space-y-10'>
          <div className='space-y-4 text-lg/[23.4px]'>
            <h3 className='text-[26px]/[31.47px] font-medium'>Доставка</h3>
            <div className='space-y-3'>
              <p>Доставка - щоденно з 12.00 до 20.00.</p>
              <p>
                Доставка здійснюється таксі, за тарифами оператора, з розрахунку{' '}
                <span className='text-primary-light'>10грн - 1 км.</span>
              </p>
              <p>
                При замовленні від 700 грн - безкоштовна доставка в радіусі 2 км
                від кафе.
              </p>
              <p>Також можливий самовивіз замовлення</p>
            </div>
          </div>
          <div className='space-y-4 text-lg/[23.4px]'>
            <h3 className='text-[26px]/[31.47px] font-medium'>Оплата</h3>
            <p>Онлайн</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
