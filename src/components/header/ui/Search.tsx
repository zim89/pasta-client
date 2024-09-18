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
      className='md:mr-3 xl:mr-[2.75rem]'
    >
      <SearchIcon className='size-6 md:size-5' />
    </Link>
  )
}
