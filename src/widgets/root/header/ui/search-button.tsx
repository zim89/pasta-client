'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'

import { APP_PAGES } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

export const SearchButton = ({ className }: { className?: string }) => {
  const path = usePathname()

  if (path === APP_PAGES.SEARCH) return null

  return (
    <Link href={APP_PAGES.SEARCH} className={cn('btn-icon', className)}>
      <Search className='size-8 stroke-[1.5px] md:size-6' />
    </Link>
  )
}
