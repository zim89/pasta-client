import type { HitsAndNewsResponse } from '@/types/dish.types'
import { axiosBase, axiosWithAuth } from '@/api/interceptors'

class DishService {
  private BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL! + '/dish'

  async getHitsAndNews() {
    const response = await axiosBase.get<HitsAndNewsResponse>(
      this.BASE_URL + '/hits-and-news'
    )
    return response.data
  }

  async getDishById(id: string) {}

  async createDish(data: any) {
    return await axiosWithAuth.post(this.BASE_URL, data)
  }

  async updateDish(id: string, data: any) {
    return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
  }

  async removeDish(id: string) {
    return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
  }
}

export const dishService = new DishService()
