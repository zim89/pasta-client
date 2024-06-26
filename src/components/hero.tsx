import Image from 'next/image'
import hero from '@/assets/images/hero.jpg'
import parsley from '@/assets/images/parsley.png'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <div
      className='h-[274px] md:h-[480px] xl:h-[824px] overflow-clip md:-mt-[56px]'
      style={{
        filter: 'saturate(1.7)'
      }}
    >
      <Image
        src={hero.src}
        fill
        className='object-cover -z-10 object-center md:scale-[1.75] md:object-[11em_6em] xl:scale-[1.6] xl:object-[13.5em_6em]'
        alt=''
      />
      <div className='hidden md:block container absolute z-20 top-28 left-0'>
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
            className='-z-20 absolute'
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
    </div>
  )
}
