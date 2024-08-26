'use client'

import { Search as SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Search = () => {
  const path = usePathname()

  if (path === '/search') return <span className='block ml-auto mr-[2.75rem]' />

  return (
    <Link
      href='/search'
      className='xl:ml-auto xl:mr-[2.75rem]'
    >
      <SearchIcon size={20} />
    </Link>
  )
}
