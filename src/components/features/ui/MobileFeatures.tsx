import { Feature } from '@/types/feature.types'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
  features: Feature[]
  className?: string
}

export const MobileFeatures = ({ features, className }: Props) => {
  return (
    <ul className={cn('grid grid-cols-2 gap-[14px] md:hidden', className)}>
      {features.map(item => (
        <li
          data-testid='feature-item-mobile'
          key={item.title}
          className='p-2 border-[0.86px] border-primary-light/70 rounded-[25.91px]'
        >
          <Image
            src={item.image}
            width={64}
            height={64}
            alt={item.title}
            className='mb-3 w-auto mx-auto'
          />
          <h3 className='text-sm/[16.8px] font-semibold text-center mb-1.5'>
            {item.title}
          </h3>
          <p className='text-xs/[14.4px] text-center px-2'>
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  )
}
