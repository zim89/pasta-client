'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { WithBlock } from '@/shared/ui/with-block'
import { AlignLeft, X } from 'lucide-react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/common/dialog'
import { cn } from '@/shared/lib/utils'
import { LINKS_DATA } from '@/shared/data/links.data'
import parsley from '@/shared/assets/images/decoration/parsley.png'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger className='xl:hidden'>
        <AlignLeft className='size-10 stroke-[1.5px]' />
      </DialogTrigger>

      <DialogContent className='w-[350px] rounded-[20px] border-0 p-0 pb-[270px] pt-[130px]'>
        <DialogHeader className='hidden'>
          <DialogTitle>Mobile menu</DialogTitle>
          <DialogDescription>Open mobile menu.</DialogDescription>
        </DialogHeader>
        <DialogClose className='text-grey absolute right-10 top-[46px] md:right-8 md:top-[38px]'>
          <X className='size-8' />
        </DialogClose>

        <ul className='flex flex-col items-center gap-10'>
          {LINKS_DATA.map(link => {
            const isActive = path === link.href
            return (
              <WithBlock key={link.label}>
                <li
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'border-b-0 border-b-primary-light text-center text-xl/[26px] font-medium text-black transition-all duration-300',
                    isActive && 'border-b-2',
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              </WithBlock>
            )
          })}
        </ul>

        <Image
          className='absolute bottom-10 right-8 rotate-12'
          src={parsley.src}
          width={60}
          height={68}
          alt='Parsley image'
        />
      </DialogContent>
    </Dialog>
  )
}
