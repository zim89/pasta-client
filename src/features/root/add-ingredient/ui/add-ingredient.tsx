export const AddIngredient = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      disabled={disabled}
      className='h-11 w-[200px] rounded-4xl border border-primary-light bg-white text-sm/[18.2px] font-medium text-primary-light transition-colors duration-300 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled disabled:text-gray-600 xl:w-[220px]'
    >
      Додати інгредієнти
    </button>
  )
}
