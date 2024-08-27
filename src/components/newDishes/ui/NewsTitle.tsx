export const NewsTitle = ({ title }: { title: string }) => {
  return (
    <h3
      className='text-sm/[16.94px] font-semibold h-8 xl:text-base/[20.8px] xl:font-medium xl:h-[63px]'
      data-testid='card-name'
    >
      {title}
    </h3>
  )
}
