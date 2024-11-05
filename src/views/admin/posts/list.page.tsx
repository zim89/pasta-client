import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ImageField, List, ListBase, UrlField, useGetList } from 'react-admin'

import { EntitiesGrid } from '@/widgets/admin/entities-grid'
import { MobileEntitiesGrid } from '@/widgets/admin/mobile-entities-grid'
import { PostHeaderActions } from '@/widgets/admin/post-header-action'
import { BulkDeletePosts } from '@/features/admin/bulk-delete-posts'
import type { Post } from '@/entities/post'
import { useHashParamValue, useMedia, usePaginate } from '@/shared/lib/hooks'

export const PostsList = () => {
  const router = useRouter()
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
    router.replace('#/insta-posts?perPage=5&page=1')
  }, [])

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
        <MobileEntitiesGrid
          empty={
            <ListBase>
              <PostHeaderActions />
            </ListBase>
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          displayedRows={displayedRows}
          actions={<PostHeaderActions />}
          renderGrid={rows => (
            <EntitiesGrid
              displayedRows={rows}
              bulkActions={<BulkDeletePosts />}
            >
              <ImageField
                source='image'
                label='Постер'
                cellClassName='size-12 object-contain'
                sortable={false}
              />
              <UrlField source='link' label='Лінк' />
            </EntitiesGrid>
          )}
        />
      ) : (
        <List
          className='hidden p-4 md:block'
          actions={<PostHeaderActions />}
          perPage={Number(limitParam)}
          empty={
            <ListBase>
              <PostHeaderActions />
            </ListBase>
          }
        >
          <EntitiesGrid
            displayedRows={paginated}
            bulkActions={<BulkDeletePosts />}
          >
            <ImageField
              source='image'
              label='Постер'
              cellClassName='size-12 object-contain'
              sortable={false}
            />
            <UrlField source='link' label='Лінк' />
          </EntitiesGrid>
        </List>
      )}
    </>
  )
}
