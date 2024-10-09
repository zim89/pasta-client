import { Button, ButtonProps } from './common'

type Props = {
  decrease: () => void
  increase: () => void
  value: number
  incrementProps?: ButtonProps
  decrementProps?: ButtonProps
}

export const QuantityController = ({
  decrease,
  increase,
  value,
  decrementProps,
  incrementProps,
}: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        type='button'
        className='size-10 rounded-[6px] border border-gray-400 text-[26px]/[31.47px] font-medium text-gray-700'
        {...decrementProps}
        onClick={decrease}
      >
        -
      </Button>

      <span className='inline-flex size-10 items-center justify-center rounded-[6px] border border-gray-400 text-[18px]/[23.4px]'>
        {value}
      </span>
      <Button
        type='button'
        className='size-10 rounded-[6px] border border-gray-400 text-[26px]/[31.47px] font-medium text-gray-700'
        {...incrementProps}
        onClick={increase}
      >
        <span className='-mt-1'>+</span>
      </Button>
    </div>
  )
}
