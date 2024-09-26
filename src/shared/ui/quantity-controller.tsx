import { Button } from './common'

type Props = {
  decrease: () => void
  increase: () => void
  value: number
}

export const QuantityController = ({ decrease, increase, value }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Button
        type='button'
        onClick={decrease}
        className='border-gray-400 size-10 rounded-[6px] border text-[26px]/[31.47px] font-medium text-gray-700'
      >
        -
      </Button>
      <span className='border-gray-400 size-10 rounded-[6px] border px-[15px] py-2 text-[18px]/[23.4px]'>
        {value}
      </span>
      <Button
        type='button'
        onClick={increase}
        className='border-gray-400 size-10 rounded-[6px] border text-[26px]/[31.47px] font-medium text-gray-700'
      >
        +
      </Button>
    </div>
  )
}
