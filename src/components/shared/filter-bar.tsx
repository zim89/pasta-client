import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/shared/lib/utils/cn-merge'

const items = ['Все меню', 'Паста', 'Різотто', 'Супчіки', 'Напої', 'Інше']

export const FilterBar = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const onClick = (item: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    params.delete('sort')
    item === 'Все меню' ? params.delete('filter') : params.set('filter', item)
    router.replace(`${path}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='pb-8 pt-8 md:pb-10 xl:pt-[60px]'>
      <ul className='hidden md:flex md:items-center md:justify-between'>
        {items.map(item => {
          const isActive =
            searchParams.get('filter') === item ||
            (item === 'Все меню' && !searchParams.has('filter'))

          return (
            <li key={item}>
              <button
                onClick={() => onClick(item)}
                className={cn(
                  'rounded-[30px] border px-4 py-3 text-lg/[23.4px] xl:px-10',
                  isActive
                    ? 'border-primary-light text-primary-light'
                    : 'border-black/20 text-black'
                )}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
