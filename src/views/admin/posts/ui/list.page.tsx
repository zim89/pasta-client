import type { Post } from '@/entities/post'
import { useMedia } from '@/shared/lib/hooks'
import { useResourcePaginationSortController } from '@/shared/lib/hooks/useResourcePaginationSort'
import { DesktopList } from './desktop-list'
import { MobileList } from './mobile-list'

export const PostsList = () => {
  const {
    paginatedRows,
    currentPage,
    allRows,
    setCurrentPage,
    limitParam,
    setLimit,
  } = useResourcePaginationSortController<Post>({ resource: 'insta-posts' })
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
