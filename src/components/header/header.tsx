import { Instagram, Search, Smartphone } from 'lucide-react'
import { BurgerMenu } from '../burgerMenu'
import { PinIcon } from '../icons-pack'
import { Button } from '../ui/button'
import { CartButton } from './ui/CartButton'
import { Links } from './ui/Links'
import { Logo } from './ui/Logo'

export const Header = () => {
  return (
    <header className='md:bg-transparent md:mt-0'>
      <div className='bg-primary'>
        <div className='container py-2'>
          <div className='flex items-center justify-center md:justify-between pt-1 pb-3 text-white text-sm'>
            <p className='hidden md:flex md:items-center'>
              <PinIcon />
              <span>Kиїв, Еспланадна, 34/2</span>
            </p>
            <p className='text-center xl:mx-[44px]'>
              Доставка щоденно з 12.00 до 20.00
            </p>
            <Button className='hidden xl:block ml-auto mr-[44px]'>
              <Search size={20} />
            </Button>
            <p className='hidden md:flex md:items-center md:gap-1'>
              <Smartphone size={20} />
              <span>+380 (96) 612 27 20</span>
            </p>
            <p className='hidden xl:block ml-5 mr-[44px]'>
              +380 (96) 612 27 20
            </p>
            <a
              href='https://www.instagram.com/la_pepito.kyiv/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden xl:flex items-center justify-center size-12 text-white transition-colors duration-300  hover:text-accent'
            >
              <Instagram className='size-7 flex-none' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-primary md:bg-[transparent] backdrop-blur-sm relative z-50'>
        <div className='flex justify-between items-center container'>
          <div className='xl:hidden md:mr-28'>
            <BurgerMenu />
          </div>

          <Logo />
          <Links />
          <CartButton />
        </div>
      </div>
    </header>
  )
}
