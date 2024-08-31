import Image from 'next/image'
import hit_png from '@/assets/images/decoration/hit.png'

export const HitLabel = () => {
  return (
    <div className='absolute left-4 top-4 flex size-[68px] -rotate-[15deg] items-center justify-center'>
      <Image
        src={hit_png}
        alt='hit image'
        fill
        sizes='100%'
      />
      <p className='z-10 text-base/[20.8px] font-medium uppercase text-white'>
        Хіт
      </p>
    </div>
  )
}
