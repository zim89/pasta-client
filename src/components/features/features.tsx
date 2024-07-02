import Image from 'next/image'
import { BrandCarousel } from '@/components/brandCarousel'
import { featureList } from '@/data/features.data'

export const Features = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Наші переваги</h2>

        <ul className='grid grid-cols-2 gap-[14px] md:hidden'>
          {featureList.map(item => (
            <li
              key={item.title}
              className='p-2 border-[0.86px] border-primary-light/70 rounded-[25.91px] size-[164px]'
            >
              <Image
                src={item.icon_sm}
                alt={item.title}
                height={62}
                className='mb-3 w-auto mx-auto'
              />
              <h3 className='text-sm/[16.8px] h-[34px] font-semibold text-center mb-1.5'>
                {item.title}
              </h3>
              <p className='text-xs/[14.4px] text-center px-2'>{item.desc}</p>
            </li>
          ))}
        </ul>

        <ul className='hidden xl:grid xl:grid-cols-4 xl:gap-[106.67px]'>
          {featureList.map(item => (
            <li
              key={item.title}
              className='py-[30px] px-[17px] border border-primary-light/50 rounded-[30px] size-[240px]'
            >
              <Image
                src={item.icon}
                alt={item.title}
                height={72}
                width={80}
                className='mb-6 mx-auto'
              />
              <h3 className='text-base/[20.8px] font-medium text-center mb-2'>
                {item.title}
              </h3>
              <p className='text-sm/[18.2px] text-center'>{item.desc_full}</p>
            </li>
          ))}
        </ul>

        <BrandCarousel>
          {CarouselItem => {
            return (
              <>
                {featureList.map(item => (
                  <CarouselItem
                    key={item.title}
                    className='basis-1/3 pl-10'
                  >
                    <div className='border border-primary-light/50 rounded-[30px] flex flex-col items-center justify-center py-[20.5px] px-2'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        height={72}
                        width={80}
                        className='mb-6'
                      />
                      <h3 className='text-base/[19.2px] font-medium mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-sm/[18.2px] text-center px-4'>
                        {item.desc}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </>
            )
          }}
        </BrandCarousel>
      </div>
    </section>
  )
}
