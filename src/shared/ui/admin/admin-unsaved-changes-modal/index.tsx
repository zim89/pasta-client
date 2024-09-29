import { useAdminWarnWhenUnsavedChanges } from '@/shared/lib/hooks/useAdminWarnWhenUnsavedChanges'
import { cn } from '@/shared/lib/utils'
import { Button } from '../../common'

type Props = {
  enable?: boolean | undefined
  formRootPathName?: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formControl?: any
}

export const AdminUnsavedChangesModal = (props: Props) => {
  const blocker = useAdminWarnWhenUnsavedChanges(
    !!props.enable,
    props.formRootPathName,
    props.formControl,
  )

  const handleLeave = () => {
    if (blocker.proceed) blocker.proceed()
    if (blocker.reset) blocker.reset()
  }

  const handleClose = () => {
    // You need to reset the blocker as it works only once at a time
    if (blocker.reset) blocker.reset()
  }

  return (
    <>
      <div
        className={cn(
          'fixed bottom-4 left-4 z-50 translate-y-80 rounded-lg border border-primary-lightest bg-white p-4 pb-2 shadow-xl transition-[ease-in-out_700ms_transform]',
          !blocker.reset || (blocker.state === 'blocked' && 'translate-y-0'),
        )}
      >
        <hgroup>
          <h3 className='font-semibold'>Залишити сторінку?</h3>
          <p className='text-grey my-2 text-sm'>
            Зміни, які ви внесли, можуть бути не збережені.
          </p>
        </hgroup>
        <div className='flex justify-end'>
          <Button onClick={handleClose}>Закрити</Button>
          <Button onClick={handleLeave} className='text-[#f64a4a]'>
            Залишити
          </Button>
        </div>
      </div>
    </>
  )
}
