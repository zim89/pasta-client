import Image from 'next/image'

export const EmptyComponent = () => {
  return (
    <div className='flex h-96 flex-col items-center justify-center'>
      <Image src='/images/cart.png' height={128} width={128} alt='Empty cart' />
      <h2 className='my-4 max-w-xl text-center font-alegreya text-2xl md:text-3xl'>
        На даний момент жодного замовлення не було здійснено
      </h2>
      <p className='text-center text-sm font-light md:text-base'>
        {`Але список замовлень неодмінно з'явиться пізніше.`}
      </p>
    </div>
  )
}
