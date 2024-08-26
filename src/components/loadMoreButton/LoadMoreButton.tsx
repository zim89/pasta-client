import { Button, ButtonProps } from '../ui/button'

export const LoadMoreButton = (props: ButtonProps) => {
  return (
    <Button
      className='md:hidden p-0 font-normal w-full mt-6 mb-[3.75rem]'
      {...props}
    >
      <span className='inline-block border-b border-b-primary-light'>
        Подивитись ще
      </span>
    </Button>
  )
}
