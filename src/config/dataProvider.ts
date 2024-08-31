import { DataProvider, fetchUtils } from 'react-admin'

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
    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${params.id}`
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

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}`,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )

    return {
      data: response.json
    }
  },
  delete: async (resource, params) => {
    const { id } = params

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${id}`,
      {
        method: 'DELETE'
      }
    )

    return {
      data: response.json
    }
  },
  update: async (resource, params) => {
    const { id, data } = params

    const response = await fetchUtils.fetchJson(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/${resource}/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data)
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
