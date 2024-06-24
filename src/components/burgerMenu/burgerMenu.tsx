'use client'

import { useState } from 'react'
import { AlignLeft, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import parsley from '@/assets/images/parsley.png'
import { Button } from '../ui/button'
import { links } from '@/data/burgerLinks.data'

export const BurgerMenu = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setOpened(!opened)}>
        <AlignLeft
          color='white'
          strokeWidth={1}
        />
      </Button>

      <div
        className={cn(
          'absolute p-8 z-50 left-0 top-0 max-h-[700px] h-full w-full font-medium bg-light transition-transform duration-500',
          opened
            ? 'translate-y-[0px] opacity-100'
            : 'translate-y-[-1000px] opacity-0'
        )}
      >
        <X
          size={32}
          className='text-grey ml-auto'
          onClick={setOpened.bind(null, false)}
        />
        <ul className='flex flex-col items-center gap-10'>
          {links.map(link => {
            return (
              <li
                key={link.label}
                className='hover:border-b border-b-primary-dark text-black'
              >
                <a href={link.href}>{link.label}</a>
              </li>
            )
          })}
        </ul>
        <Image
          src=''
          alt=''
        />
      </div>
    </>
  )
}
