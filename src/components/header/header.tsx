import { Instagram, ShoppingCart, Smartphone } from 'lucide-react'
import { BurgerMenu } from '../burgerMenu'
import CartButton from '../cartButton/CartButton'
import { PinIcon } from '../icons-pack'
import { Button } from '../ui/button'
import { Links } from './ui/Links'
import { Logo } from './ui/Logo'
import { Search } from './ui/Search'

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
          <div className='flex items-center'>
            <Search />
            <CartButton>
              {Trigger => (
                <>
                  <Trigger className='flex flex-col md:flex-row md:gap-5 md:px-8 md:py-[6px] text-[0.625rem] rounded-[30px] text-white md:text-black md:bg-white md:border md:border-primary md:hover:opacity-90 items-center'>
                    <div>
                      <span>0</span>

                      <div className='-mt-[5px]'>
                        <ShoppingCart size={24} />
                      </div>
                    </div>
                    <span className='hidden md:inline text-sm'>00,00 грн</span>
                  </Trigger>
                </>
              )}
            </CartButton>
          </div>
        </div>
      </div>
    </header>
  )
}
