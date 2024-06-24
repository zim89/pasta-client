'use client'

import { useEffect, useState } from 'react'
import { AlignLeft, X } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useActive } from '@/hooks/useActive'
import parsley from '@/assets/images/parsley.png'
import { Button } from '../ui/button'
import { links } from '@/data/burgerLinks.data'

export const BurgerMenu = () => {
  const [opened, setOpened] = useState(false)
  const { active, change } = useActive()
  const location = usePathname()

  useEffect(() => {
    change(location)
  }, [location])

  return (
    <>
      <Button onClick={() => setOpened(!opened)}>
        <AlignLeft
          className='text-white md:text-black'
          strokeWidth={1}
          size={40}
        />
      </Button>

      <div
        className={cn(
          'absolute p-8 z-10 left-0 top-0 w-full font-medium bg-light transition-transform duration-500',
          opened
            ? 'translate-y-[-56px] opacity-100 '
            : 'translate-y-[-1000px] opacity-0 transition-transform duration-500'
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
                className={cn(
                  'text-black',
                  active === link.href && 'border-b border-b-primary-dark'
                )}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            )
          })}
        </ul>
        <Image
          className='ml-auto mt-40'
          src={parsley.src}
          width={60}
          height={68}
          alt=''
        />
      </div>
    </>
  )
}
