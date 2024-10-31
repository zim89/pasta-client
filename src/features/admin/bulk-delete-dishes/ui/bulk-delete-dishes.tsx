import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeleteDishes = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення страв'
      description="Ви впевнені, що хочете видалити дані страви? Після видалення їх неможливо буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити страви в меню."
    />
  )
}
