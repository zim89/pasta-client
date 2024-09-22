import * as React from 'react'
import { getImageProps, StaticImageData } from 'next/image'

interface PictureProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  sources: Record<string, string | StaticImageData>
  src: string | StaticImageData
  alt: string
}
const Picture = React.forwardRef<HTMLImageElement, PictureProps>(
  ({ src, sources, alt, sizes, ...props }, ref) => {
    const common = { alt: alt, sizes }
    const { props: rest } = getImageProps({
      ...common,
      src,
    })

    return (
      <picture>
        {Object.entries(sources).map(([query, source]) => (
          <source
            key={query}
            media={query}
            srcSet={
              getImageProps({
                ...common,
                src: source,
              }).props.srcSet
            }
          />
        ))}

        <img ref={ref} alt={alt} {...props} {...rest} />
      </picture>
    )
  },
)
Picture.displayName = 'Picture'

export { Picture }
