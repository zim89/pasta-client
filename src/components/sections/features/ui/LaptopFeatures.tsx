import Image from 'next/image'
import { Feature } from '@/entities/advantage/model/types'
import features_veggies2 from '@/shared/assets/images/features-veggies-2.png'
import features_veggies1 from '@/shared/assets/images/features-veggies.png'
import { cn } from '@/shared/lib/utils/cn-merge'

type Props = {
  features: Feature[]
  className?: string
}

export const LaptopFeatures = ({ features, className }: Props) => {
  return (
    <ul
      className={cn(
        'relative hidden xl:grid xl:grid-cols-4 xl:gap-[53.33px]',
        className
      )}
    >
      <Image
        className='absolute -left-20 -top-10 -z-10'
        src={features_veggies1}
        alt=''
      />
      {features.map(item => (
        <li
          data-testid='feature-item-laptop'
          key={item.title}
          className='rounded-4xl border border-primary-light/50 bg-white bg-opacity-50 p-[34px]'
        >
          <Image
            src={item.image}
            alt={item.title}
            height={72}
            width={80}
            className='mx-auto mb-6'
          />
          <h3 className='mb-2 text-center text-base/[20.8px] font-medium'>
            {item.title}
          </h3>
          <p className='text-center text-sm/[20.8px]'>{item.description}</p>
        </li>
      ))}
      <Image
        className='absolute -bottom-10  -right-12 -z-10'
        src={features_veggies2}
        alt=''
      />
    </ul>
  )
}
