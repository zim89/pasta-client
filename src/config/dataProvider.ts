import { DataProvider, fetchUtils } from 'react-admin'
import { retrieveToken } from '@/helpers/dataProvider.helpers'

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}`
    )

    return {
      data: response.json,
      total: response.json.length
    }
  },
  getOne: async (resource, params) => {
    const { token } = retrieveToken()

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${params.id}`,
      {
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token
        }
      }
    )

    return {
      data: response.json
    }
  },
  getMany: async (resource, params) => {
    return {
      data: []
    }
  },
  create: async (resource, params) => {
    const { data } = params

    const { token } = retrieveToken()

    let requestBody: FormData | string

    if (resource === 'our-advantages') {
      const form = new FormData()
      form.append('image', data.image.rawFile)
      form.append('title', data.title)
      form.append('description', data.description)

      requestBody = form
    } else {
      requestBody = JSON.stringify(data)
    }

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}`,
      {
        method: 'POST',
        body: requestBody,
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token
        }
      }
    )

    return {
      data: response.json
    }
  },
  delete: async (resource, params) => {
    const { id } = params

    const { token } = retrieveToken()

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${id}`,
      {
        method: 'DELETE',
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token
        }
      }
    )

    return {
      data: response.json
    }
  },
  update: async (resource, params) => {
    const { id, data } = params

    const { token } = retrieveToken()

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(data),
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token
        }
      }
    )

    return {
      data: response.json
    }
  },
  deleteMany: async (resource, params) => {
    console.log('Deletion ')

    return {
      data: []
    }
  },
  updateMany: async (resource, params) => {
    return {
      data: []
    }
  },
  getManyReference: async (resource, params) => {
    return {
      data: []
    }
  }
}
