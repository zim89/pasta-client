import { WithBlock } from '@/shared/ui/with-block'
import { Instagram } from 'lucide-react'

export const InstagramButton = () => {
  return (
    <WithBlock>
      <a
        href='https://www.instagram.com/la_pepito.kyiv/'
        target='_blank'
        rel='noopener noreferrer'
        className='ml-auto flex size-12 items-center justify-center text-white transition-colors duration-300 hover:text-accent'
      >
        <Instagram className='size-7 flex-none' />
      </a>
    </WithBlock>
  )
}
