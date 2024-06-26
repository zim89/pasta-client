import Image from 'next/image'
import hero from '@/assets/images/hero.jpg'
import parsley from '@/assets/images/parsley.png'
import { Button } from '../ui/button'

export const Hero = () => {
  return (
    <div
      // Adjusted container width since 500px screens on tablets to ensure the hero looks pretty.
      className='md:static h-[274px] min-[500px]:h-[480px] xl:h-[824px] overflow-clip md:-mt-[82px]'
      style={{
        filter: 'saturate(1.7)'
      }}
    >
      <Image
        src={hero.src}
        fill
        style={{ top: '-15px' }}
        className='object-cover -z-10 object-center md:scale-[1.75] md:object-[11em_7em] xl:scale-[1.6] xl:object-[13em_7em]'
        alt=''
      />

      <div className='hidden md:block container translate-y-20 xl:translate-y-24'>
        <h1 className='font-alegreya text-[4.375rem]/[4.375rem] xl:text-[8.125rem]/[8.938rem] text-primary-dark font-medium xl:font-bold'>
          Pasta <br className='hidden xl:block' /> La{' '}
          <br className='xl:hidden' />
          Pepito
        </h1>
        <p className='max-w-[280px] xl:max-w-[400px] text-sm/[1.225rem] xl:text-base mt-6'>
          Відчуйте аромат і неперевершений смак італійських страв, якими тепер
          можна насолоджуватися прямо вдома.
        </p>
        <div className='relative flex items-center max-h-24 max-w-32 mt-20'>
          <Image
            src={parsley}
            className='absolute'
            style={{
              transform:
                'scale(0.7) translate(-2em, -1em) rotateY(180deg) rotateZ(50deg) '
            }}
            alt=''
          />
          <Button className='ml-10 z-20 bg-primary-light text-sm xl:text-lg/[1.463rem] font-medium opacity-90 text-white rounded-[30px] px-9 py-6 xl:px-14 cursor-pointer'>
            Подивитися меню
          </Button>
        </div>
      </div>
      <div className='flex items-end h-full md:hidden scale-x-[1.4]'>
        <svg
          className='w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#aedbde'
            fill-opacity='1'
            d='M0,96L120,133.3C240,171,480,245,720,240C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          ></path>
          <path
            style={{ transform: 'scaleY(0.5) translateY(113%)' }}
            fill='#d0e9eb'
            fill-opacity='1'
            d='M0,32L60,37.3C120,43,240,53,360,85.3C480,117,600,171,720,170.7C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
          <path
            style={{ transform: 'scaleY(0.6) translateY(70%)' }}
            fill='#fbfbfb'
            fill-opacity='1'
            d='M0,192L120,208C240,224,480,256,720,256C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  )
}
