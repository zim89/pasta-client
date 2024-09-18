import Image from 'next/image'
import { PageHeader } from '@/components/pageHeader'
import poster from '@/shared/assets/images/about-us-poster.jpg'

export default function page() {
  return (
    <div className='container mb-[72px] mt-5 xl:mb-[120px]'>
      <PageHeader
        breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Про нас' }]}
        title='Про нас'
      />
      <div className='items-center gap-[100px] xl:flex'>
        <div className='relative mb-5 min-h-[251px] min-w-[343px] overflow-clip rounded-2xl md:float-left md:mb-0 md:mr-8 md:min-h-[264px] md:min-w-[340px] md:rounded-[30px] xl:mr-0 xl:min-h-[450px] xl:min-w-[620px]'>
          <Image
            className='w-full'
            src={poster.src}
            fill
            alt=''
          />
        </div>
        <p className='text-justify text-sm/[1.138rem] xl:text-base/[1.3rem]'>
          <span className='font-semibold text-primary-light'>
            Pasta Le Pepito
          </span>{' '}
          - ресторан італійської кухні, що виник 2019 року зі спільної
          пристрасті Семена і Романа до концепту street food&apos;а і бажання
          створити щось особливе.
          <span className='mb-[14px] block xl:mb-12' />
          Засновники бренду, за чиїми плечима на двох понад 30 років діяльності,
          познайомилися на фестивалях їжі, і відтоді загорілися ідеєю відкрити
          спільну справу, створити місце для смачної їжі, теплих зустрічей і
          приємних спогадів.
          <span className='mb-[14px] block xl:hidden' /> І Pasta La Pepito
          успішно показала, що ні пандемія, ні повномасштабна війна не стануть
          перешкодою тому, до чого лежить серце.
          <span className='mb-[14px] block md:mb-5 xl:mb-12' />
          Головною особливістю ресторану Pasta La Pepito є не тільки смачні
          страви, а й особливий підхід до кожного клієнта. Ми раді бачити
          знайомі обличчя, вести задушевні бесіди та розділяти задоволення від
          італійської кухні разом із відвідувачами кожного дня.
          <span className='mb-[14px] block xl:hidden' /> Саме щасливі обличчя
          наших гостей стали головною мотивацією на початку гастрономічного
          шляху. І тепер ми можемо з упевненістю заявити: ви не просто наші
          клієнти, ви — душа Pasta La Pepito.
        </p>
      </div>
    </div>
  )
}
