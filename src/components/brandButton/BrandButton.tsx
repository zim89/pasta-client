import { CSSProperties } from 'react'
import { Button, ButtonProps } from '../../shared/ui/common/button'
import { cn } from '@/shared/lib/utils/cn-merge'

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
      className={cn('rounded-[30px] px-6 py-3', className)}
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
