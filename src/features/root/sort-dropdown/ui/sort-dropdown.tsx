import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/common/select'

const items: { [key: string]: string } = {
  popular: 'За популярністю',
  min_price: 'За зростанням ціни',
  max_price: 'За спаданням ціни',
}

export const SortDropdown = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const value = searchParams.get('sort') ?? 'popular'

  const onChange = (value: string) => {
    if (value === 'popular' && !searchParams.has('sort')) return

    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)
    router.replace(`${path}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='hidden md:mb-6 md:flex md:items-center md:justify-end'>
      <Select value={value} onValueChange={value => onChange(value)}>
        <SelectTrigger className='h-6 w-auto gap-3 rounded-none border-none bg-light p-0 pr-[3.5px] text-lg/[23.4px] font-normal focus:shadow-none focus:ring-0 focus:ring-offset-0 [&_svg]:data-[state=open]:rotate-180'>
          <SelectValue aria-label={value}>{items[value]}</SelectValue>
        </SelectTrigger>
        <SelectContent className='rounded-sm border-none p-0 py-2 shadow-[0_8px_16px_0_rgba(0,17,20,0.25)]'>
          {Object.entries(items).map(([key, value]) => (
            <SelectItem
              key={key}
              value={key}
              className='py-1 pl-1 text-[15px]/[19.5px] data-[state=checked]:bg-secondary'
            >
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
