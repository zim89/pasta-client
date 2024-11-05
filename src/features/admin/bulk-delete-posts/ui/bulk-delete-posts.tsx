import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeletePosts = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення постів'
      description="Ви впевнені, що хочете видалити дані пости? Після видалення їх неможливо буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити дані пости."
    />
  )
}
