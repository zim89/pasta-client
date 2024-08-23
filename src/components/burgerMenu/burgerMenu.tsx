'use client'

import { useEffect, useState } from 'react'
import { AlignLeft, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

  // Highlight active link and close the menu
  useEffect(() => {
    change(location)
    setOpened(false)
  }, [location])

  return (
    <>
      {/* Trigger button */}
      <Button
        onClick={() => setOpened(!opened)}
        className='px-0'
        data-testid='trigger-btn'
      >
        <AlignLeft
          className='text-white md:text-black'
          strokeWidth={1}
          size={40}
        />
      </Button>

      <div
        data-testid='burger-menu'
        className={cn(
          'absolute p-8 left-0 top-0 ml-5 mt-5 rounded-[20px] w-[calc(100%-40px)] font-medium bg-light transition-all duration-500',
          opened
            ? '-translate-y-14 opacity-100'
            : 'translate-y-[-1000px] transition-transform duration-500 opacity-80'
        )}
      >
        {/* Close button */}
        <X
          data-testid='close-btn'
          size={32}
          className='text-grey ml-auto cursor-pointer'
          onClick={setOpened.bind(null, false)}
        />
        {/* Links */}
        <ul className='flex flex-col items-center gap-10'>
          {links.map(link => {
            return (
              <li
                key={link.label}
                className={cn(
                  'text-black transition-all duration-300 border-b-0 border-b-primary-light',
                  active === link.href && 'border-b-2'
                )}
              >
                <Link
                  data-testid={
                    active === link.href ? 'active-link' : 'menu-link'
                  }
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Image
          className='ml-auto mt-40'
          style={{
            transform: 'rotateY(180deg) rotateZ(50deg) '
          }}
          src={parsley.src}
          width={60}
          height={68}
          alt=''
        />
      </div>
    </>
  )
}
