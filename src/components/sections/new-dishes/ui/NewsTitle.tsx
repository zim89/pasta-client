export const NewsCardTitle = ({ title }: { title: string }) => {
  return (
    <h3
      className='h-8 text-sm/[16.94px] font-semibold xl:h-[63px] xl:text-base/[20.8px] xl:font-medium'
      data-testid='card-name'
    >
      {title}
    </h3>
  )
}
