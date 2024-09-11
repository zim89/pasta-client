'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AlignLeft, X } from 'lucide-react'

import { Button } from '@/shared/ui/common/button'
import { useActive } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { LINKS_DATA } from '@/shared/data/links.data'
import parsley from '@/shared/assets/images/decoration/parsley.png'

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
      <Button onClick={() => setOpened(!opened)} className='px-0'>
        <AlignLeft
          className='text-white md:text-black'
          strokeWidth={1}
          size={40}
        />
      </Button>

      <div
        className={cn(
          'bg-light absolute left-0 top-0 ml-5 mt-5 w-[calc(100%-40px)] rounded-[20px] p-8 font-medium transition-all duration-500',
          opened
            ? '-translate-y-14 opacity-100'
            : 'translate-y-[-1000px] opacity-80 transition-transform duration-500',
        )}
      >
        {/* Close button */}
        <X
          size={32}
          className='text-grey ml-auto cursor-pointer'
          onClick={setOpened.bind(null, false)}
        />
        {/* Links */}
        <ul className='flex flex-col items-center gap-10'>
          {LINKS_DATA.map(link => {
            return (
              <li
                key={link.label}
                className={cn(
                  'border-b-primary-light border-b-0 text-black transition-all duration-300',
                  active === link.href && 'border-b-2',
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })}
        </ul>

        <Image
          className='ml-auto mt-40'
          style={{
            transform: 'rotateY(180deg) rotateZ(50deg) ',
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
