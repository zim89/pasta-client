import { PackageOpen } from 'lucide-react'
import { ListBase } from 'react-admin'

import { OrderHeaderActions } from '@/widgets/admin/order-header-actions'
import { cn } from '@/shared/lib/utils'

type Props = {
  classNames?: Partial<{
    'empty-list-content': string
    'empty-list-icon': string
    'empty-list-text': string
  }>
}

export const Empty = ({ classNames }: Props) => {
  return (
    <ListBase>
      <OrderHeaderActions />
      <div
        className={cn(
          'flex h-full flex-col items-center justify-center',
          classNames?.['empty-list-content'],
        )}
      >
        <PackageOpen
          strokeWidth={1}
          className={cn(
            'size-32 text-gray-600 xl:size-64',
            classNames?.['empty-list-icon'],
          )}
        />
        <p
          className={cn(
            'font-alegreya text-2xl',
            classNames?.['empty-list-text'],
          )}
        >
          Наразі замовлень немає
        </p>
      </div>
    </ListBase>
  )
}
