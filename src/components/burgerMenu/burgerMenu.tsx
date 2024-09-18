'use client'

import { useEffect, useState } from 'react'
import { AlignLeft, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../../shared/ui/common/button'
import parsley from '@/shared/assets/images/parsley.png'
import { LINKS_DATA } from '@/shared/data/links.data'
import { useActive } from '@/shared/lib/hooks/useActive'
import { cn } from '@/shared/lib/utils/cn-merge'

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
          'absolute left-0 top-0 ml-5 mt-5 w-[calc(100%-40px)] rounded-[20px] bg-light p-8 font-medium transition-all duration-500',
          opened
            ? '-translate-y-14 opacity-100'
            : 'translate-y-[-1000px] opacity-80 transition-transform duration-500'
        )}
      >
        {/* Close button */}
        <X
          data-testid='close-btn'
          size={32}
          className='ml-auto cursor-pointer text-grey'
          onClick={setOpened.bind(null, false)}
        />
        {/* Links */}
        <ul className='flex flex-col items-center gap-10'>
          {LINKS_DATA.map(link => {
            return (
              <li
                key={link.label}
                className={cn(
                  'border-b-0 border-b-primary-light text-black transition-all duration-300',
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
