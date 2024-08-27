import Image from 'next/image'
import { BrandCarousel } from '@/components/brandCarousel'
import features_veggies2 from '@/assets/images/features-veggies-2.png'
import features_veggies1 from '@/assets/images/features-veggies.png'
import { featureList } from '@/data/features.data'

export const Features = () => {
  return (
    // On mobiles it's above Hits section, on larger screens it's below
    <section
      className='section order-[-1] md:order-1'
      data-testid='feature-section'
    >
      <div className='container'>
        <h2 className='heading'>Наші переваги</h2>

        {/* Mobile layout */}
        <ul className='grid grid-cols-2 gap-[14px] md:hidden'>
          {featureList.map(item => (
            <li
              data-testid='feature-item-mobile'
              key={item.title}
              className='p-2 border-[0.86px] border-primary-light/70 rounded-[25.91px] size-[164px]'
            >
              <Image
                src={item.icon_sm}
                alt={item.title}
                width={62}
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

        {/* Laptop layout */}
        <ul className='hidden xl:grid xl:grid-cols-4 xl:gap-[53.33px] relative'>
          <Image
            className='absolute -z-10 -left-20 -top-10'
            src={features_veggies1}
            alt=''
          />
          {featureList.map(item => (
            <li
              data-testid='feature-item-laptop'
              key={item.title}
              className='p-[34px] border border-primary-light/50 rounded-4xl bg-opacity-50 bg-white'
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
              <p className='text-sm/[20.8px] text-center'>{item.desc_full}</p>
            </li>
          ))}
          <Image
            className='absolute -z-10  -right-12 -bottom-10'
            src={features_veggies2}
            alt=''
          />
        </ul>

        {/* Tablet layout */}
        <BrandCarousel>
          {CarouselItem => {
            return (
              <>
                {featureList.map(item => (
                  <CarouselItem
                    key={item.title}
                    className='basis-1/3 pl-10'
                  >
                    <div
                      data-testid='feature-item-tablet'
                      className='border border-primary-light/50 rounded-[30px] flex flex-col items-center justify-center py-[20.5px] px-2'
                    >
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
