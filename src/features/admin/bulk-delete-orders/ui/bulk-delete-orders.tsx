import { CustomBulkDeleteButton } from '@/shared/ui/admin/custom-bulk-delete-button'

export const BulkDeleteOrders = () => {
  return (
    <CustomBulkDeleteButton
      title='Видалення замовлень з історії'
      description="Ви впевнені, що хочете видалити дані замовлення з історії? Після видалення їх неможливо буде повернути. Натисніть 'Видалити', щоб підтвердити, або 'Скасувати', щоб залишити замовлення в історії."
    />
  )
}
