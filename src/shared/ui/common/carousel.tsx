'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'

import { Button } from '@/shared/ui/common/button'
import { cn } from '@/shared/lib/utils/cn-merge'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className='overflow-hidden'>
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-10 w-10 rounded-full border border-primary-light text-primary-light transition-colors duration-300 hover:border-primary hover:text-primary disabled:border-primary-light/50 disabled:text-primary-light/50',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.4257 18.5975C14.5056 18.6863 14.568 18.7908 14.6095 18.9049C14.6509 19.0191 14.6706 19.1407 14.6673 19.2628C14.664 19.385 14.6378 19.5053 14.5903 19.6168C14.5428 19.7283 14.4748 19.8289 14.3902 19.9128C14.3057 19.9967 14.2062 20.0623 14.0975 20.1059C13.9888 20.1494 13.873 20.1701 13.7568 20.1666C13.6405 20.1632 13.526 20.1357 13.4198 20.0858C13.3136 20.0358 13.2179 19.9644 13.138 19.8756L5.61017 11.5036C5.45471 11.3309 5.36809 11.1022 5.36809 10.8645C5.36809 10.6268 5.45471 10.3982 5.61017 10.2255L13.138 1.85253C13.2173 1.76177 13.3131 1.68849 13.4196 1.63693C13.5262 1.58537 13.6415 1.55657 13.7587 1.55219C13.876 1.54782 13.9929 1.56796 14.1027 1.61144C14.2124 1.65492 14.3129 1.72089 14.3982 1.80549C14.4835 1.8901 14.5519 1.99167 14.5996 2.1043C14.6472 2.21693 14.673 2.33837 14.6756 2.46158C14.6781 2.58478 14.6573 2.70729 14.6144 2.82199C14.5715 2.93669 14.5074 3.04129 14.4257 3.12972L7.47174 10.8645L14.4257 18.5975Z'
          fill='currentColor'
        />
      </svg>

      <span className='sr-only'>Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-10 w-10 rounded-full border border-primary-light text-primary-light transition-colors duration-300 hover:border-primary hover:text-primary disabled:border-primary-light/50 disabled:text-primary-light/50',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.57435 18.5975C7.49445 18.6863 7.43199 18.7908 7.39052 18.9049C7.34906 19.0191 7.32942 19.1407 7.33271 19.2628C7.336 19.385 7.36216 19.5053 7.4097 19.6168C7.45723 19.7283 7.52522 19.8289 7.60977 19.9128C7.69432 19.9967 7.79378 20.0623 7.90248 20.1059C8.01117 20.1494 8.12696 20.1701 8.24324 20.1666C8.35953 20.1632 8.47403 20.1357 8.5802 20.0858C8.68637 20.0358 8.78214 19.9644 8.86204 19.8756L16.3898 11.5036C16.5453 11.3309 16.6319 11.1022 16.6319 10.8645C16.6319 10.6268 16.5453 10.3982 16.3898 10.2255L8.86205 1.85253C8.78267 1.76177 8.68692 1.68849 8.58036 1.63693C8.4738 1.58537 8.35854 1.55657 8.24129 1.55219C8.12404 1.54782 8.00713 1.56796 7.89735 1.61144C7.78757 1.65492 7.68711 1.72089 7.60181 1.80549C7.5165 1.8901 7.44806 1.99167 7.40044 2.1043C7.35282 2.21693 7.32699 2.33837 7.32443 2.46158C7.32188 2.58478 7.34265 2.70729 7.38556 2.82199C7.42846 2.93669 7.49263 3.04129 7.57435 3.12972L14.5283 10.8645L7.57435 18.5975Z'
          fill='currentColor'
        />
      </svg>

      <span className='sr-only'>Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = 'CarouselNext'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
