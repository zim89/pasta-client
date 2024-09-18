import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BrandPagination } from '@/components/brandPagination'
import { ProductGrid } from '@/components/productGrid'
import { dishService } from '@/entities/dish/api/dishes.service'
import { QUERY_KEYS } from '@/shared/constants'
import { PAGINATION_LIMIT } from '@/shared/constants'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'

export type Props = {
  debouncedSearch: string
}

export const SearchPageDisplay = ({ debouncedSearch }: Props) => {
  const { isMobileScreen } = useMedia()

  const { data: dishes } = useQuery({
    queryKey: [QUERY_KEYS.DISHES],
    queryFn: async () => {
      try {
        return dishService.getDishes()
      } catch (err) {
        console.error('Error fetching dishes:', err)
      }
    }
  })

  const [matched, setMatched] = useState(dishes || [])
  const [_, { paginated, setPaginated }] = usePaginate(matched)

  // Filtering menu items
  useEffect(() => {
    if (dishes) {
      setMatched(
        dishes.filter(
          item =>
            item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            item.type.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            (item.composition &&
              item.composition.includes(debouncedSearch.toLowerCase()))
        )
      )
    }
  }, [debouncedSearch, dishes])

  // When menu is filtered, then it aligns pagination results
  useEffect(() => {
    setPaginated(matched.slice(0, PAGINATION_LIMIT))
  }, [matched])

  return (
    <>
      <ProductGrid products={isMobileScreen ? matched : paginated} />
      <BrandPagination
        pages={Math.floor(matched.length / PAGINATION_LIMIT)}
        className='hidden md:mb-[4.5rem] md:mt-8 md:flex xl:mb-[7.5rem] xl:mt-16'
      />
      <div className='mt-[5.25rem] md:hidden' />
    </>
  )
}
