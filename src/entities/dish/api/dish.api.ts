import { axiosBase } from '@/shared/api'
import type { Dish, HitsAndNewsResponse } from '../model'

class DishApi {
  private BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL! + '/dish'

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
}

export const dishApi = new DishApi()
