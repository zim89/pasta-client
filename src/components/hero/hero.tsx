import Image from 'next/image'
import { Button } from '../../shared/ui/common/button'
import hero from '@/shared/assets/images/hero.jpg'
import parsley from '@/shared/assets/images/parsley.png'

export const Hero = () => {
  return (
    <div
      // Adjusted container width since 500px screens on tablets to ensure the hero looks pretty.
      className='h-[274px] overflow-clip min-[500px]:h-[480px] md:static md:-mt-[82px] xl:h-[824px]'
      style={{
        filter: 'saturate(1.7)'
      }}
    >
      <Image
        src={hero.src}
        fill
        style={{ top: '-15px' }}
        className='-z-10 object-cover object-center md:scale-[1.75] md:object-[11em_7em] xl:scale-[1.6] xl:object-[13em_7em]'
        alt=''
      />

      <div className='container hidden translate-y-20 md:block xl:translate-y-24'>
        <h1 className='font-alegreya text-[4.375rem]/[4.375rem] font-medium text-primary-dark xl:text-[8.125rem]/[8.938rem] xl:font-bold'>
          Pasta <br className='hidden xl:block' /> La{' '}
          <br className='xl:hidden' />
          Pepito
        </h1>
        <p className='mt-6 max-w-[280px] text-sm/[1.225rem] xl:max-w-[400px] xl:text-base'>
          Відчуйте аромат і неперевершений смак італійських страв, якими тепер
          можна насолоджуватися прямо вдома.
        </p>
        <div className='relative mt-20 flex max-h-24 max-w-32 items-center'>
          <Image
            src={parsley}
            className='absolute'
            style={{
              transform:
                'scale(0.7) translate(-2em, -1em) rotateY(180deg) rotateZ(50deg) '
            }}
            alt=''
          />
          <Button className='z-20 ml-10 cursor-pointer rounded-[30px] bg-primary-light px-9 py-6 text-sm font-medium text-white opacity-90 xl:px-14 xl:text-lg/[1.463rem]'>
            Подивитися меню
          </Button>
        </div>
      </div>
      <div className='flex h-full scale-x-[1.4] items-end md:hidden'>
        <svg
          className='w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#aedbde'
            fillOpacity='1'
            d='M0,96L120,133.3C240,171,480,245,720,240C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          ></path>
          <path
            style={{ transform: 'scaleY(0.5) translateY(113%)' }}
            fill='#d0e9eb'
            fillOpacity='1'
            d='M0,32L60,37.3C120,43,240,53,360,85.3C480,117,600,171,720,170.7C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
          <path
            style={{ transform: 'scaleY(0.6) translateY(70%)' }}
            fill='#fbfbfb'
            fillOpacity='1'
            d='M0,192L120,208C240,224,480,256,720,256C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  )
}
