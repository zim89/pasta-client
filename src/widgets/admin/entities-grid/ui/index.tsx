import { Datagrid } from 'react-admin'

type Props<T> = {
  children: React.ReactNode
  displayedRows: T[]
  bulkActions?: React.ReactElement
}

export const EntitiesGrid = <T,>({
  children,
  displayedRows,
  bulkActions,
}: Props<T>) => {
  return (
    <Datagrid data={displayedRows} bulkActionButtons={bulkActions}>
      {children}
    </Datagrid>
  )
}
