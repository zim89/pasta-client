'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { menuLinks } from '@/shared/data/links.data'
import { useActive } from '@/shared/lib/hooks/useActive'
import { cn } from '@/shared/lib/utils/cn-merge'

export const Links = () => {
  const { active, change } = useActive()
  const location = usePathname()

  useEffect(() => {
    change(location)
  }, [location])

  return (
    <ul
      className='hidden xl:flex xl:gap-[60px]'
      data-testid='links'
    >
      {menuLinks.map((item, index) => (
        <li key={index}>
          <Link
            data-testid={active === item.href ? 'active-link' : 'link'}
            className={cn(
              'relative after:absolute after:-bottom-[0.5px] after:left-0 after:h-[0.5px] after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full group-hover:after:w-full',
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
