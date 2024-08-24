'use client'

import { Search as SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Search = () => {
  const path = usePathname()

  if (path === '/search') return <span className='block ml-auto mr-[44px]' />

  return (
    <Link
      href='/search'
      className='hidden xl:block ml-auto mr-[44px]'
    >
      <SearchIcon size={20} />
    </Link>
  )
}
