import { useQuery } from '@tanstack/react-query'

import { postService, PostsSkeleton } from '@/entities/post'

export const usePosts = () => {
  const { data, isLoading, isPlaceholderData, isError } = useQuery({
    ...postService.getPostsQueryOptions(),
  })
  const cursor = (
    <div>
      {isLoading && <PostsSkeleton />}
      {isError && <PostsSkeleton />}
    </div>
  )
  return { data, cursor, isPlaceholderData }
}
