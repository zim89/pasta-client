import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import { CreateOrder, Order } from '../model'

class OrderService {
  private BASE_URL = SERVER_URL + '/order'

  async createOrder(payload: CreateOrder) {
    const response = await axiosBase.post<Order>(this.BASE_URL, payload)
    return response.data
  }

  async getOrderById(orderId: string) {
    const response = await axiosBase.get<Order>(this.BASE_URL + `/${orderId}`)
    return response.data
  }
}

export const orderService = new OrderService()
