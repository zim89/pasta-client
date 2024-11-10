import { Button, ButtonProps } from '@/shared/ui'

import { cn } from '@/shared/lib/utils'

type Props = {
  children?: React.ReactNode
  onSubmit?: () => void
} & Omit<ButtonProps, 'children' | 'onClick'>

export const ProceedOrder = ({
  children = 'Оформити замовлення',
  onSubmit,
  ...rest
}: Props) => {
  return (
    <Button
      {...rest}
      type={onSubmit ? 'button' : 'submit'}
      className={cn('w-full md:max-w-80 xl:max-w-[413px]', rest.className)}
      variant='filled'
      size='lg'
      onClick={onSubmit}
    >
      {children}
    </Button>
  )
}
