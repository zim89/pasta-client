import { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '../ui/button'

export type Props = Omit<ButtonProps, 'className' | 'kind'> & {
  kind: 'outlined' | 'filled'
  primaryColor?: CSSProperties['color']
  secondaryColor?: CSSProperties['color']
  className?: string
}

export const BrandButton = ({
  kind,
  primaryColor = '#0C99A2',
  secondaryColor = '#FFFFFF',
  className,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      className={cn('py-3 px-6 rounded-[30px]', className)}
      data-testid='brand-btn'
      style={{
        backgroundColor: kind === 'filled' ? primaryColor : secondaryColor,
        color: kind === 'filled' ? secondaryColor : primaryColor,
        border: kind === 'filled' ? undefined : `1px solid ${primaryColor}`
      }}
    >
      {props.children}
    </Button>
  )
}
