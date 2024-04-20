import axios, { type CreateAxiosDefaults } from 'axios'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const axiosBase = axios.create(options)
const axiosWithAuth = axios.create(options)

export { axiosBase, axiosWithAuth }
