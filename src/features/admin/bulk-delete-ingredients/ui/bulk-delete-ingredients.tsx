import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeleteIngredients = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення інгредієнтів'
      description="Ви впевнені, що хочете видалити дані інгредієнти? Після видалення їх не можна буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити інгредієнти у списку"
    />
  )
}
