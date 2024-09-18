import { Datagrid, DatagridProps, List, ListProps } from 'react-admin'
import { Button } from '../../shared/ui/common/button'
import { EntityGrid } from '../entityGrid'
import { PAGINATION_LIMIT_MOBILE } from '@/shared/constants/app.const'

type Props<T> = {
  displayedRows: T[]
  currentPage: number
  setCurrentPage(page: number): void
  renderGrid: (rows: T[]) => JSX.Element
  paginationLimit?: number
} & Omit<ListProps, 'children'>

export const MobileGrid = <T,>({
  displayedRows,
  currentPage,
  setCurrentPage,
  renderGrid,
  paginationLimit = PAGINATION_LIMIT_MOBILE,
  ...listProps
}: Props<T>) => {
  return (
    <List
      pagination={false}
      className='p-4 md:hidden'
      {...listProps}
    >
      {renderGrid(displayedRows.slice(0, currentPage * paginationLimit))}

      {displayedRows.length > 0 &&
        displayedRows.length > currentPage * paginationLimit && (
          <Button
            className='w-full'
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span>Загрузити ще..</span>
          </Button>
        )}
    </List>
  )
}
