import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import type { Ingredient } from '../model'

class IngredientService {
  private BASE_URL = SERVER_URL + '/ingredient'

  async getAll() {
    const response = await axiosBase.get<Ingredient[]>(this.BASE_URL)
    return response.data
  }
}

export const ingredientService = new IngredientService()
