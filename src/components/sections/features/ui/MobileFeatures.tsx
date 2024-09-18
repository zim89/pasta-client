import Image from 'next/image'
import { Feature } from '@/entities/advantage/model/types'
import { cn } from '@/shared/lib/utils/cn-merge'

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
          className='rounded-[25.91px] border-[0.86px] border-primary-light/70 p-2'
        >
          <Image
            src={item.image}
            width={64}
            height={64}
            alt={item.title}
            className='mx-auto mb-3 w-auto'
          />
          <h3 className='mb-1.5 text-center text-sm/[16.8px] font-semibold'>
            {item.title}
          </h3>
          <p className='px-2 text-center text-xs/[14.4px]'>
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  )
}
