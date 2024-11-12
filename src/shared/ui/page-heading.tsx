import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const PageHeading = ({
  title,
  image,
}: {
  title: string
  image?: StaticImageData
}) => {
  return (
    <div className='mb-8 md:mb-[34px] xl:mb-[60px]'>
      <Link
        href='/'
        className='flex items-center justify-center gap-3 md:hidden'
      >
        <ChevronLeft className='size-6 stroke-[1.5px]' />
        <h1 className='font-alegreya text-[28px]/[36.4px] font-medium tracking-wide'>
          {title}
        </h1>
      </Link>
      <h1 className='relative hidden text-center font-alegreya text-4xl/[46.8px] font-medium tracking-wide md:block xl:text-[50px]/[65px]'>
        {title}
        {image && (
          <div className='absolute right-[182.8px] top-0 h-[67.36px] w-[76.02px] xl:right-[410px] xl:top-1 xl:h-[81.05px] xl:w-[91.48px]'>
            <Image
              src={image}
              alt='Menu decoration image'
              fill
              sizes='100%'
              className='object-contain'
            />
          </div>
        )}
      </h1>
    </div>
  )
}
