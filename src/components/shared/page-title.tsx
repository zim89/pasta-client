import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parsley_img from '@/shared/assets/images/decoration/parsley.png'

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className='relative'>
      <Link
        href='/'
        className='flex items-center justify-center gap-3 md:hidden'
      >
        <ChevronLeft className='size-7' />
        <h1 className='font-alegreya text-[28px]/[36.4px] font-medium uppercase'>
          {title}
        </h1>
      </Link>

      <h1 className='hidden text-center font-alegreya font-medium uppercase md:block md:text-4xl/[46.8px] xl:text-[50px]/[65px]'>
        {title}
      </h1>
      <Image
        src={parsley_img}
        alt='Parsley image'
        width={91.48}
        height={81.05}
        className='absolute right-[400px] top-1 hidden h-auto rotate-[12deg] xl:block'
      />
    </div>
  )
}
