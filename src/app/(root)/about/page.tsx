import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import poster from '@/assets/images/about-us-poster.jpg'

export default function page() {
  return (
    <div className='container mb-[72px] mt-5 xl:mb-[120px]'>
      <Breadcrumb className='hidden md:block'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className='opacity-50'
              href='/'
            >
              Головна
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Про нас</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='my-8 md:mt-5 xl:mb-[60px] flex md:block justify-center items-center'>
        <Link
          href='/'
          className='mr-3 md:hidden'
        >
          <ChevronLeft size={24} />
        </Link>
        <h1 className='font-alegreya text-center text-[28px] md:text-4xl xl:text-[3.125rem]'>
          Про нас
        </h1>
      </div>
      <div className='xl:flex items-center gap-[100px]'>
        <div className='relative min-h-[251px] min-w-[343px] md:min-h-[264px] md:min-w-[340px] xl:min-w-[620px] xl:min-h-[450px] md:float-left rounded-2xl md:rounded-[30px] overflow-clip md:mr-8 mb-5 md:mb-0 xl:mr-0'>
          <Image
            className='w-full'
            src={poster.src}
            fill
            alt=''
          />
        </div>
        <p className='text-justify text-sm/[1.138rem] xl:text-base/[1.3rem]'>
          <span className='text-primary-light font-semibold'>
            Pasta Le Pepito
          </span>{' '}
          - ресторан італійської кухні, що виник 2019 року зі спільної
          пристрасті Семена і Романа до концепту street food&apos;а і бажання
          створити щось особливе.
          <span className='block mb-[14px] xl:mb-12' />
          Засновники бренду, за чиїми плечима на двох понад 30 років діяльності,
          познайомилися на фестивалях їжі, і відтоді загорілися ідеєю відкрити
          спільну справу, створити місце для смачної їжі, теплих зустрічей і
          приємних спогадів.
          <span className='block mb-[14px] xl:hidden' /> І Pasta La Pepito
          успішно показала, що ні пандемія, ні повномасштабна війна не стануть
          перешкодою тому, до чого лежить серце.
          <span className='block mb-[14px] md:mb-5 xl:mb-12' />
          Головною особливістю ресторану Pasta La Pepito є не тільки смачні
          страви, а й особливий підхід до кожного клієнта. Ми раді бачити
          знайомі обличчя, вести задушевні бесіди та розділяти задоволення від
          італійської кухні разом із відвідувачами кожного дня.
          <span className='block mb-[14px] xl:hidden' /> Саме щасливі обличчя
          наших гостей стали головною мотивацією на початку гастрономічного
          шляху. І тепер ми можемо з упевненістю заявити: ви не просто наші
          клієнти, ви — душа Pasta La Pepito.
        </p>
      </div>
    </div>
  )
}
