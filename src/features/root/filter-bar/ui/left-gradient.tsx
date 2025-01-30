import { useCarousel } from '@/shared/ui'

import { cn } from '@/shared/lib/utils'

export const LeftCarousel = () => {
  const { api } = useCarousel()
  const canScrollLeft = !!api?.canScrollPrev()

  return (
    <div
      className={cn(
        'to-transparent pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-gradient-to-r from-[#fbfbfb]',
        !canScrollLeft && 'hidden',
      )}
    />
  )
}
