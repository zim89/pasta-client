import { useEffect, useState } from 'react'
import { EntityGrid } from '@/components/entityGrid'
import { MobileGrid } from '@/components/mobileGrid'
import { ImageField, List, TextField, UrlField, useGetList } from 'react-admin'

import { PostHeaderActions } from '@/widgets/post-header-action'
import { Post } from '@/entities/post/model/type'
import { useHashParamValue, useMedia, usePaginate } from '@/shared/lib/hooks'

export const PostsList = () => {
  const { isMobileScreen } = useMedia()
  const { data } = useGetList('insta-posts')
  const [displayedRows, setDisplayedRows] = useState<Post[]>(data || [])

  const limitParam = useHashParamValue('perPage')
  const pageParam = useHashParamValue('page')
  const sortParam = useHashParamValue('sort')
  const orderParam = useHashParamValue('order')

  const [currentPage, { paginated, setLimit, setCurrentPage }] = usePaginate(
    displayedRows,
    Number(pageParam),
    Number(limitParam),
  )

  useEffect(() => {
    if (!sortParam || !orderParam) return

    const sort = sortParam as keyof Post

    setDisplayedRows([
      ...displayedRows.sort((a, b) => {
        if (orderParam === 'DESC') return b[sort]! < a[sort]! ? -1 : 1
        return a[sort]! < b[sort]! ? -1 : 1
      }),
    ])
  }, [sortParam, orderParam])

  useEffect(() => {
    if (data) {
      setDisplayedRows(data)
      setLimit(5)
    }
  }, [data])

  useEffect(() => {
    if (limitParam) {
      setLimit(Number(limitParam))
    }
  }, [limitParam])

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(Number(pageParam))
    }
  }, [pageParam])

  return (
    <>
      {isMobileScreen ? (
        <MobileGrid
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          actions={<PostHeaderActions />}
          renderGrid={rows => (
            <EntityGrid displayedRows={rows}>
              <ImageField
                source='image'
                label='Постер'
                cellClassName='size-12 object-contain'
                sortable={false}
              />
              <UrlField source='link' label='Лінк' />
            </EntityGrid>
          )}
        />
      ) : (
        <List className='hidden p-4 md:block' actions={<PostHeaderActions />}>
          <EntityGrid displayedRows={paginated}>
            <ImageField
              source='image'
              label='Постер'
              cellClassName='size-12 object-contain'
              sortable={false}
            />
            <UrlField source='link' label='Лінк' />
          </EntityGrid>
        </List>
      )}
    </>
  )
}
