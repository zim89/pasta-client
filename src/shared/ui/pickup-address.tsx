import { cn } from '../lib/utils'
import { PinIcon } from './icons-pack'

type Props = {
  classNames?: {
    root?: string
    title?: string
    city?: string
    street?: React.ReactElement
  }
}

export const PickupAddress = ({ classNames }: Props) => {
  return (
    <div
      className={cn(
        'mr-auto max-h-min w-full flex-col rounded-[20px] border border-primary-light border-opacity-50 px-[10px] py-6 md:max-w-[250px] md:border-0 md:p-0',
        classNames?.root,
      )}
    >
      <h3
        className={cn(
          'mb-[18px] text-[18px]/[23.4px] font-medium xl:text-[26px]/[31.47px]',
          classNames?.title,
        )}
      >
        Адреса ресторану
      </h3>
      <p
        className={cn(
          'inline-flex w-full items-center gap-[6px] border-b border-b-primary-light py-[10px] text-base/[20.8px] text-primary-light',
          classNames?.city,
        )}
      >
        <PinIcon /> <span>Київ</span>
      </p>
      <p className={cn('mt-2', classNames?.street)}>
        вул. Еспланадна, буд. 34/2
      </p>
    </div>
  )
}
