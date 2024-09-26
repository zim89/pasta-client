import { ImageInput, ImageInputProps } from 'react-admin'

import { cn } from '@/shared/lib/utils'

type BrandImageInputProps = {
  source: string
  label?: string
  className?: string
} & Omit<ImageInputProps, 'source' | 'label' | 'className'>
export const BrandImageInput = ({
  source,
  label = 'Зображення',
  className,
  ...rest
}: BrandImageInputProps) => {
  return (
    <ImageInput
      source={source}
      headerCellClassName='bg-grey'
      className={cn(
        'border-[3px] border-dashed border-secondary p-2',
        className,
      )}
      label={label}
      placeholder='Натисніть або перетягніть зображення сюди'
      {...rest}
    />
  )
}
