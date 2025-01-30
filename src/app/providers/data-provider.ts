import {
  addRefreshAuthToDataProvider,
  DataProvider,
  fetchUtils,
} from 'react-admin'

import { SERVER_URL } from '@/shared/constants'
import { refreshAuth } from '@/shared/lib/utils/admin-auth-provider-funcs'
import { retrieveToken } from '@/shared/lib/utils/admin-data-provider-funcs'
import { transliterate } from '@/shared/lib/utils/transliteration'

const resourcesWithImages = [
  'dish',
  'our-advantages',
  'ingredient',
  'insta-posts',
]

export const dataProvider: DataProvider = {
  getList: async resource => {
    const { token } = retrieveToken()
    const response = await fetchUtils.fetchJson(`${SERVER_URL}/${resource}`, {
      user: {
        token: `Bearer ${token}`,
        authenticated: !!token,
      },
    })

    const data = response.json

    return {
      data,
      total: data.length,
    }
  },
  getOne: async (resource, params) => {
    const { token } = retrieveToken()

    const url =
      resource === 'dish'
        ? `${SERVER_URL}/${resource}/by-id/${params.id}`
        : `${SERVER_URL}/${resource}/${params.id}`

    const response = await fetchUtils.fetchJson(url, {
      user: {
        token: `Bearer ${token}`,
        authenticated: !!token,
      },
    })

    return {
      data: response.json,
    }
  },

  getMany: async () => {
    return {
      data: [],
    }
  },
  create: async (resource, params) => {
    const { data } = params

    const { token } = retrieveToken()

    let requestBody: FormData | string

    if (resourcesWithImages.includes(resource)) {
      const form = new FormData()

      for (const prop in data) {
        form.append(prop, data[prop])
      }
      form.delete('image')
      form.append('image', data.image.rawFile)

      if (resource === 'dish') {
        form.append('isNew', 'true')
      } else if (resource === 'ingredient') {
        form.append('name', transliterate(data.label))
      }

      requestBody = form
    } else {
      requestBody = JSON.stringify(data)
    }

    const response = await fetchUtils.fetchJson(`${SERVER_URL}/${resource}`, {
      method: 'POST',
      body: requestBody,
      user: {
        token: `Bearer ${token}`,
        authenticated: !!token,
      },
    })

    return {
      data: response.json,
    }
  },
  delete: async (resource, params) => {
    const { id } = params

    const { token } = retrieveToken()

    if (resource === 'category') {
      const res = await dataProvider.deleteMany('category', { ids: [id] })

      return {
        data: res.data,
      }
    }

    const response = await fetchUtils.fetchJson(
      `${SERVER_URL}/${resource}/${id}`,
      {
        method: 'DELETE',
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token,
        },
      },
    )

    return {
      data: response.json,
    }
  },
  update: async (resource, params) => {
    const { id, data } = params

    const { token } = retrieveToken()

    let requestBody: FormData | string

    if (resourcesWithImages.includes(resource)) {
      const form = new FormData()

      for (const prop in data) {
        form.append(prop, data[prop])
      }
      form.delete('image')
      form.append('image', data.image.rawFile)

      if (resource === 'dish') {
        form.set('category', data.category.name)
      } else if (resource === 'ingredient') {
        form.set('name', transliterate(data.label))
      }

      requestBody = form
    } else {
      requestBody = JSON.stringify(data)
    }

    const response = await fetchUtils.fetchJson(
      `${SERVER_URL}/${resource}/${id}`,
      {
        method: 'PATCH',
        body: requestBody,
        user: {
          token: `Bearer ${token}`,
          authenticated: !!token,
        },
      },
    )

    return {
      data: response.json,
    }
  },
  deleteMany: async (resource, params) => {
    const { ids } = params

    const { token } = retrieveToken()

    await fetchUtils.fetchJson(`${SERVER_URL}/${resource}`, {
      method: 'DELETE',
      body: JSON.stringify({
        ids,
      }),
      user: {
        token: `Bearer ${token}`,
        authenticated: !!token,
      },
    })

    return {
      data: ids,
    }
  },

  updateMany: async () => {
    return {
      data: [],
    }
  },

  getManyReference: async () => {
    return {
      data: [],
    }
  },
}

export const dataProviderWithRefresh = addRefreshAuthToDataProvider(
  dataProvider,
  refreshAuth,
)
