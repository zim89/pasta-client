import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { categoryService } from '@/entities/category'
import { QUERY_KEYS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { FilterBarSkeleton } from './filter-bar-skeleton'

export const FilterBar = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoryService.getCategories(),
  })

  const onClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    params.delete('sort')
    if (category === 'Все меню') {
      params.delete('filter')
    } else {
      params.set('filter', category)
    }
    router.replace(`${path}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='mb-[22px] flex flex-wrap justify-center gap-1 md:gap-x-[41px] md:gap-y-6 xl:gap-x-[53px] xl:gap-y-5'>
      {isLoading ? (
        <FilterBarSkeleton />
      ) : (
        data && (
          <>
            <button
              onClick={() => onClick('Все меню')}
              className={cn(
                'h-[47px] flex-1 whitespace-pre rounded-[30px] border px-5 text-lg/[23.4px] md:flex-none xl:px-10',
                !searchParams.get('filter')
                  ? 'border-primary-light text-primary-light'
                  : 'border-black/20 text-black',
              )}
            >
              Все меню
            </button>

            {data.map(category => {
              const isActive = searchParams.get('filter') === category.name

              return (
                <button
                  key={category.id}
                  onClick={() => onClick(category.name)}
                  className={cn(
                    'h-[47px] flex-1 rounded-[30px] border px-5 text-lg/[23.4px] capitalize md:flex-none xl:px-10',
                    isActive
                      ? 'border-primary-light text-primary-light'
                      : 'border-black/20 text-black',
                  )}
                >
                  {category.name}
                </button>
              )
            })}
          </>
        )
      )}
    </div>
  )
}
