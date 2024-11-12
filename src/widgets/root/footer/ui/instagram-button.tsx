import { Instagram } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

export const InstagramButton = ({ className }: { className?: string }) => {
  return (
    <a
      href='https://www.instagram.com/la_pepito.kyiv/'
      target='_blank'
      rel='noopener noreferrer'
      className={cn('btn-icon', className)}
    >
      <Instagram className='size-6 stroke-[1.5px]' />
    </a>
  )
}
