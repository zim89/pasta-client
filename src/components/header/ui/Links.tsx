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
            className={cn(active === item.href && 'border-b border-b-black')}
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
