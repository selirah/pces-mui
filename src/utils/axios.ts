import axios, { AxiosInstance } from 'axios'
import { getSession } from 'next-auth/react'
import { AxiosOption } from '@/types/Common'

const adminInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api`
})

const authInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_USERSERVICE_URL}/api`
})

export const adminRequest = async ({ ...options }: AxiosOption) => {
  const userSession = await getSession()
  const { accessToken } = userSession
  adminInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  adminInstance.defaults.headers.post['Content-Type'] = 'application/json'

  return await adminInstance(options)
}

export const authRequest = async ({ ...options }: AxiosOption) => {
  authInstance.defaults.headers.common['Authorization'] = `Bearer ${options.bearerToken}`
  authInstance.defaults.headers.post['Content-Type'] = 'application/json'

  return await authInstance(options)
}
