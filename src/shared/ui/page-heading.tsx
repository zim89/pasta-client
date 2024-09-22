import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const PageHeading = ({ title }: { title: string }) => {
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
      <h1 className='hidden text-center font-alegreya text-4xl/[46.8px] font-medium tracking-wide md:block xl:text-[50px]/[65px]'>
        {title}
      </h1>
    </div>
  )
}
