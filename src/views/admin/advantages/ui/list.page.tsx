import { Feature } from '@/entities/feature'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { useResourcePaginationSortController } from '@/shared/lib/hooks/useResourcePaginationSort'
import { DesktopList } from './desktop-list'
import { MobileList } from './mobile-list'

export const AdvantagesList = () => {
  const {
    paginatedRows,
    currentPage,
    allRows,
    setCurrentPage,
    limitParam,
    setLimit,
  } = useResourcePaginationSortController<Feature>({
    resource: 'our-advantages',
  })
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
          paginated={paginatedRows}
          limitParam={limitParam}
          countItems={allRows.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setLimit={setLimit}
        />
      )}
    </>
  )
}
