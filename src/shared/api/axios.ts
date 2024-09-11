import axios, { CreateAxiosDefaults } from 'axios'
import { getContentType } from './api.helpers'

const axiosOptions: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: getContentType(),
  withCredentials: true,
}

const axiosBase = axios.create(axiosOptions)
const axiosWithAuth = axios.create(axiosOptions)

export { axiosBase, axiosWithAuth }
