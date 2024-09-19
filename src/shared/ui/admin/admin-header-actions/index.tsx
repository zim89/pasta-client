type Props = {
  children?: React.ReactNode
  title: string
}

export const HeaderActions = ({ children, title }: Props) => {
  return (
    <div className='flex w-full items-center py-4'>
      <h2 className='mr-auto font-alegreya text-4xl'>{title}</h2>
      {children && children}
    </div>
  )
}
