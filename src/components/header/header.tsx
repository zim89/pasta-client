import { Instagram, ShoppingCart, Smartphone } from 'lucide-react'
import { Button } from '../../shared/ui/common/button'
import { PinIcon } from '../../shared/ui/icons-pack'
import { BurgerMenu } from '../burgerMenu'
import CartButton from '../cartButton/CartButton'
import { Links } from './ui/Links'
import { Logo } from './ui/Logo'
import { Search } from './ui/Search'

export const Header = () => {
  return (
    <header className='md:bg-transparent md:mt-0'>
      <div className='bg-primary'>
        <div className='container py-2'>
          <div className='flex items-center justify-center pb-3 pt-1 text-sm text-white md:justify-between xl:justify-normal'>
            <p className='hidden md:flex md:items-center'>
              <PinIcon />
              <span>Kиїв, Еспланадна, 34/2</span>
            </p>
            <p className='text-center xl:mx-[44px] xl:mr-auto'>
              Доставка щоденно з 12.00 до 20.00
            </p>

            <p className='hidden md:flex md:items-center md:gap-1'>
              <Search />
              <Smartphone size={20} />
              <span>+380 (96) 612 27 20</span>
            </p>
            <p className='ml-5 mr-[44px] hidden xl:block'>
              +380 (96) 612 27 20
            </p>

            <a
              href='https://www.instagram.com/la_pepito.kyiv/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden size-12 items-center justify-center text-white transition-colors duration-300 hover:text-accent  xl:flex'
            >
              <Instagram className='size-7 flex-none' />
            </a>
          </div>
        </div>
      </div>
      <div className='relative z-50 bg-primary backdrop-blur-sm md:bg-[transparent]'>
        <div className='container flex items-center justify-between'>
          <div className='md:mr-28 xl:hidden'>
            <BurgerMenu />
          </div>

          <Logo />
          <Links />
          <div className='flex items-center'>
            <div className='-mb-[6px] mr-4 text-white md:hidden'>
              <Search />
            </div>
            <CartButton>
              {Trigger => (
                <>
                  <Trigger className='flex flex-col items-center rounded-[30px] text-[0.625rem] text-white md:flex-row md:gap-5 md:border md:border-primary md:bg-white md:px-8 md:py-[6px] md:text-black md:hover:opacity-90'>
                    <div>
                      <span>0</span>

                      <div className='-mt-[5px]'>
                        <ShoppingCart size={24} />
                      </div>
                    </div>
                    <span className='hidden text-sm md:inline'>00,00 грн</span>
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
