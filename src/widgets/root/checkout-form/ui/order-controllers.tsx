type Props = {
  proceedOrderSlot: React.ReactNode
  returnToMenuSlot: React.ReactNode
}

export const OrderControllers = ({
  proceedOrderSlot,
  returnToMenuSlot,
}: Props) => {
  return (
    <div className='flex flex-col justify-between gap-8 md:items-end'>
      <div className='mt-auto'>{returnToMenuSlot}</div>
      {proceedOrderSlot}
    </div>
  )
}
