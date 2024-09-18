import { Button, ButtonProps } from '../../shared/ui/common/button'

export const LoadMoreButton = (props: ButtonProps) => {
  return (
    <Button
      className='mb-[3.75rem] mt-6 w-full p-0 font-normal md:hidden'
      {...props}
    >
      <span className='inline-block border-b border-b-primary-light'>
        Подивитись ще
      </span>
    </Button>
  )
}
