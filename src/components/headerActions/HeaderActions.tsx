import { AdminDialog } from '../adminDialog'

type Props = {
  children?: () => React.ReactNode
  title: string
  buttonProps?: {
    text: string
    leftSection?: React.ReactNode
    rightSection?: React.ReactNode
  }
  secondaryTitle?: string
}

export const HeaderActions = ({
  buttonProps,
  children,
  title,
  secondaryTitle
}: Props) => {
  console.log(secondaryTitle)

  return (
    <div className='flex w-full items-center py-4'>
      <h2 className='mr-auto font-alegreya text-4xl'>{title}</h2>
      {buttonProps && children && (
        <AdminDialog
          title={secondaryTitle || title}
          buttonProps={buttonProps}
        >
          {() => children()}
        </AdminDialog>
      )}
    </div>
  )
}
