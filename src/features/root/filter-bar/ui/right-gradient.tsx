import { useCarousel } from '@/shared/ui'

import { cn } from '@/shared/lib/utils'

export const RightGradient = () => {
  const { api } = useCarousel()
  const canScrollRight = !!api?.canScrollNext()

  return (
    <div
      className={cn(
        'to-transparent pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-[#fbfbfb]',
        !canScrollRight && 'hidden',
      )}
    />
  )
}
