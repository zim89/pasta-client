import { Feature } from '@/types/feature.types'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import features_veggies2 from '@/assets/images/features-veggies-2.png'
import features_veggies1 from '@/assets/images/features-veggies.png'

type Props = {
  features: Feature[]
  className?: string
}

export const LaptopFeatures = ({ features, className }: Props) => {
  return (
    <ul
      className={cn(
        'hidden xl:grid xl:grid-cols-4 xl:gap-[53.33px] relative',
        className
      )}
    >
      <Image
        className='absolute -z-10 -left-20 -top-10'
        src={features_veggies1}
        alt=''
      />
      {features.map(item => (
        <li
          data-testid='feature-item-laptop'
          key={item.title}
          className='p-[34px] border border-primary-light/50 rounded-4xl bg-opacity-50 bg-white'
        >
          <Image
            src={item.image}
            alt={item.title}
            height={72}
            width={80}
            className='mb-6 mx-auto'
          />
          <h3 className='text-base/[20.8px] font-medium text-center mb-2'>
            {item.title}
          </h3>
          <p className='text-sm/[20.8px] text-center'>{item.description}</p>
        </li>
      ))}
      <Image
        className='absolute -z-10  -right-12 -bottom-10'
        src={features_veggies2}
        alt=''
      />
    </ul>
  )
}
