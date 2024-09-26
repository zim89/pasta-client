import { useWarnWhenUnsavedChanges } from '@/shared/lib/hooks/useWarnWhenUnsavedChanges'
import { cn } from '@/shared/lib/utils'
import { Button } from '../../common'

type Props = {
  enable?: boolean | undefined
  formRootPathName?: string | undefined
  formControl?: any
}

export const AdminUnsavedChangesModal = (props: Props) => {
  const blocker = useWarnWhenUnsavedChanges(
    !!props.enable,
    props.formRootPathName,
    props.formControl,
  )

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
          <p className='my-2 text-sm text-grey'>
            Зміни, які ви внесли, можуть бути не збережені.
          </p>
        </hgroup>
        <div className='flex justify-end'>
          <Button
            onClick={() => {
              // You need to reset the blocker as it works only once at a time
              blocker.reset && blocker.reset()
            }}
          >
            Закрити
          </Button>
          <Button
            onClick={() => {
              blocker.proceed && blocker.proceed()
              blocker.reset && blocker.reset()
            }}
            className='text-[#f64a4a]'
          >
            Залишити
          </Button>
        </div>
      </div>
    </>
  )
}
