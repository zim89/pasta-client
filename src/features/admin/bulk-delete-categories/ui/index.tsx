import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeleteCategories = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення категорій'
      description="Ви впевнені, що хочете видалити дані категорії? Після видалення їх неможливо буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити категорії."
    />
  )
}
