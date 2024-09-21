import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import type { Dish, HitsAndNewsResponse } from '../model'

class DishService {
  private BASE_URL = SERVER_URL + '/dish'

  async getHitsAndNews() {
    const response = await axiosBase.get<HitsAndNewsResponse>(
      this.BASE_URL + '/hits-and-news',
    )
    return response.data
  }

  async getDishes() {
    const response = await axiosBase.get<Dish[]>(this.BASE_URL)
    return response.data
  }
  // async getDishById(id: string) {}
}

export const dishService = new DishService()
