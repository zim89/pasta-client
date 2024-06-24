import Image from 'next/image'
import hero from '@/assets/images/hero.jpg'

export default function Home() {
  return (
    <>
      <div
        className='relative h-[390px] md:h-[834px] md:-mt-14 -z-10'
        style={{
          filter: 'saturate(1.8) brightness(1.1)'
        }}
      >
        <Image
          src={hero.src}
          fill
          className='object-cover'
          alt=''
        />
      </div>
    </>
  )
}
