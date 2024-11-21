import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import type { Post } from '../model'

class PostService {
  private BASE_URL = SERVER_URL + '/insta-posts'

  async getPosts({ signal }: { signal: AbortSignal }) {
    const response = await axiosBase.get<Post[]>(this.BASE_URL, {
      signal,
    })
    return response.data
  }

  getPostsQueryOptions() {
    return queryOptions({
      queryKey: ['posts', 'many'],
      queryFn: meta => this.getPosts(meta),
      placeholderData: keepPreviousData,
    })
  }
}

export const postService = new PostService()
