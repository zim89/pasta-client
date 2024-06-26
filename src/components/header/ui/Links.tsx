'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useActive } from '@/hooks/useActive'
import { links } from '@/data/burgerLinks.data'

export const Links = () => {
  const { active, change } = useActive()
  const location = usePathname()

  useEffect(() => {
    change(location)
  }, [location])

  return (
    <ul className='hidden xl:flex xl:gap-[60px]'>
      {links.map((item, index) => (
        <li key={index}>
          <Link
            className={cn(
              'relative after:absolute after:-bottom-[0.5px] after:left-0 after:h-[0.5px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full group-hover:after:w-full',
              active === item.href && 'border-b border-b-black'
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
