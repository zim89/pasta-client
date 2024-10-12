import { Button } from '@/shared/ui'

type Props = {
  children?: React.ReactNode
}

export const ProceedOrder = ({ children = 'Оформити замовлення' }: Props) => {
  return (
    <Button
      type='submit'
      className='w-full md:max-w-80 xl:max-w-[413px]'
      variant='filled'
      size='lg'
    >
      {children}
    </Button>
  )
}
