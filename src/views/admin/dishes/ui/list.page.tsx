import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginationController } from '../lib/usePaginationController'
import { DesktopList } from './desktop-list'
import { MobileList } from './mobile-list'

export const ProductList = () => {
  const {
    paginated,
    currentPage,
    allRows,
    setCurrentPage,
    limitParam,
    setLimit,
  } = usePaginationController({ resource: 'dish' })
  const { isMobileScreen } = useMedia()

  return (
    <>
      {isMobileScreen ? (
        <MobileList
          currentPage={currentPage}
          displayedRows={allRows}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <DesktopList
          paginated={paginated}
          limitParam={Number(limitParam)}
          countItems={allRows.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setLimit={setLimit}
        />
      )}
    </>
  )
}
