import { useContext } from 'react'
import { UnsavedChangesContext } from '@/shared/context/root-unsaved-changes'

export const useRootWarnWhenUnsavedChanges = () => {
  const { unsavedChanges, update } = useContext(UnsavedChangesContext)

  const changeState = (value: boolean) => {
    update(prev => ({
      ...prev,
      unsavedChanges: value,
    }))
  }

  return [unsavedChanges, changeState] as const
}
