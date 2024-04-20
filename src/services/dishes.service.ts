import { axiosBase, axiosWithAuth } from '@/api/interceptors'

class DishService {
  private BASE_URL = '/dishes'

  async getDishes() {
    return await axiosBase.get(this.BASE_URL)
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
