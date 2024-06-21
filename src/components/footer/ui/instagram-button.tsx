import { Instagram } from 'lucide-react'

export const InstagramButton = () => {
  return (
    <a
      href='https://www.instagram.com/la_pepito.kyiv/'
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center justify-center size-12 text-white transition-colors duration-300  hover:text-accent ml-auto'
    >
      <Instagram className='size-7 flex-none' />
    </a>
  )
}
