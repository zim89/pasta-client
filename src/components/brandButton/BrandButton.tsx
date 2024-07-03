import { CSSProperties } from 'react'
import { Button, ButtonProps } from '../ui/button'

type Props = Omit<ButtonProps, 'className' | 'kind'> & {
  kind: 'outlined' | 'filled'
  primaryColor?: CSSProperties['color']
  secondaryColor?: CSSProperties['color']
}

export const BrandButton = ({
  kind,
  primaryColor = '#0C99A2',
  secondaryColor = '#FFFFFF',
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      className='py-3 px-6 rounded-[30px]'
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
