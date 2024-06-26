import Image from 'next/image'
import logoLight from '@/assets/icons/logo/logo-light.svg'
import logoPrimary from '@/assets/icons/logo/logo-primary.svg'

export const Logo = () => {
  return (
    <div className='relative w-14 h-14 md:w-20'>
      <Image
        src={logoLight.src}
        className='md:hidden'
        fill
        sizes='100%'
        alt='Logo di Pasta La Pepito'
      />
      <Image
        src={logoPrimary.src}
        className='hidden md:block'
        fill
        sizes='100%'
        alt='Logo di Pasta La Pepito'
      />
    </div>
  )
}
