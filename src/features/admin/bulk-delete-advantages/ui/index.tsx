import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeleteAdvantages = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення секцій'
      description="Ви впевнені, що хочете видалити дані секції? Після видалення їх не можна буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити секції в списку."
    />
  )
}
