import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui'
import { SelectProps } from '@radix-ui/react-select'

import { cn } from '@/shared/lib/utils'

type Props = {
  data: { label: string; value: string }[]
  placeholder?: string
  classNames?: {
    trigger: {
      root: string
      icon: string
    }
    value: {
      root: string
    }
    content: {
      root: string
    }
    item: {
      root: string
    }
  }
} & SelectProps

export const BrandSelect = ({ data, classNames, ...rest }: Props) => {
  return (
    <Select {...rest}>
      <SelectTrigger
        className={cn(
          'bg-transparent rounded-none border-0 border-b border-b-gray-500 px-0 !pb-3 pt-0 text-[15px] focus:ring-0 focus:ring-offset-0',
          classNames?.trigger.root,
        )}
        iconClassName={cn('size-6', classNames?.trigger.icon)}
      >
        <SelectValue
          placeholder={rest.placeholder}
          className={cn(classNames?.value.root)}
        />
      </SelectTrigger>
      <SelectContent
        className={cn(
          '-top-1 rounded-none border-0 py-1',
          classNames?.content.root,
        )}
      >
        {data.map((item, index) => (
          <SelectItem
            key={index}
            className={cn(
              'p-1',
              classNames?.item.root,
              rest.value === item.value && 'bg-primary-lighter',
            )}
            value={item.value}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
