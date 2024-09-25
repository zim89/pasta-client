'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/shared/ui'

import { CartButton } from '@/widgets/root/cart-button'
import { cn } from '@/shared/lib/utils'
import { LINKS_DATA } from '@/shared/data/links.data'
import { BurgerMenu } from './burger-menu'
import { SearchButton } from './search-button'

export const Navbar = ({ className }: { className?: string }) => {
  const path = usePathname()

  return (
    <nav
      className={cn(
        'relative flex h-[59px] items-center justify-between md:h-[82px] xl:h-[90px]',
        className,
      )}
    >
      <BurgerMenu />
      <Logo className='absolute left-1/2 top-0 -translate-x-1/2 xl:static xl:left-0 xl:translate-x-0' />

      <ul className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex xl:gap-[60px]'>
        {LINKS_DATA.map((item, index) => {
          const isActive = path === item.href
          return (
            <li key={index}>
              <Link
                className={cn(
                  'relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full',
                  isActive && 'after:w-full after:bg-black',
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='flex items-center gap-3 text-white'>
        <SearchButton className='md:hidden' />
        <CartButton />
      </div>
    </nav>
  )
}
