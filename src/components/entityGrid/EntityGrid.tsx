import { Datagrid } from 'react-admin'

type Props<T> = {
  children: React.ReactNode
  displayedRows: T[]
  mobileRows?: T[]
}

export const EntityGrid = <T,>({ children, displayedRows }: Props<T>) => {
  return <Datagrid data={displayedRows}>{children}</Datagrid>
}
