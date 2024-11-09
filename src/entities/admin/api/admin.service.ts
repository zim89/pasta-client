import { axiosBase } from '@/shared/api/axios'
import { SERVER_URL } from '@/shared/constants'
import { retrieveToken } from '@/shared/lib/utils/admin-data-provider-funcs'
import { ChangePasswordPayload } from '../model'

class AdminService {
  private BASE_URL = SERVER_URL + '/admin'

  async changePassword(payload: ChangePasswordPayload) {
    const { token } = retrieveToken()

    const response = await axiosBase.patch<ChangePasswordPayload, void>(
      this.BASE_URL + '/change-password',
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  }
}

export const adminService = new AdminService()
