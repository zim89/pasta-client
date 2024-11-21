import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import type { Category } from '../model'

class CategoryService {
  private BASE_URL = SERVER_URL + '/category'

  async getCategories() {
    const response = await axiosBase.get<Category[]>(this.BASE_URL)
    return response.data
  }
}

export const categoryService = new CategoryService()
