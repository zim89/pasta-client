'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/shared/lib/utils'
import { LINKS_DATA } from '@/shared/data/links.data'

export const Navbar = () => {
  const path = usePathname()

  return (
    <ul className='hidden xl:flex xl:gap-[60px]'>
      {LINKS_DATA.map((item, index) => {
        const isActive = path === item.href
        return (
          <li key={index}>
            <Link
              className={cn(
                'relative after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full group-hover:after:w-full',
                isActive && 'border-b border-b-black',
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
