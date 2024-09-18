import type { Dish, HitsAndNewsResponse } from '@/entities/dish/model/types'
import { axiosBase, axiosWithAuth } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'

class DishService {
  private BASE_URL = SERVER_URL + '/dish'

  async getHitsAndNews() {
    const response = await axiosBase.get<HitsAndNewsResponse>(
      this.BASE_URL + '/hits-and-news'
    )
    return response.data
  }

  async getDishes() {
    const response = await axiosBase.get<Dish[]>(this.BASE_URL)
    return response.data
  }
  // async getDishById(id: string) {}

  // async createDish(data: any) {
  //   return await axiosWithAuth.post(this.BASE_URL, data)
  // }

  // async updateDish(id: string, data: any) {
  //   return await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
  // }

  // async removeDish(id: string) {
  //   return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
  // }
}

export const dishService = new DishService()
