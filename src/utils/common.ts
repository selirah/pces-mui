import { ErrorResponse } from '@/types/Axios'
import CrytoJS from 'crypto-js'

export const formatNumber = (n: string) => {
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getFileExtension = (filename: string) => {
  return filename.split('.').pop().toLowerCase()
}

export const onAxiosError = (error: ErrorResponse, setError: (value: string) => void) => {
  if (error.response && error.response.data) {
    const err = JSON.stringify(error.response.data).replace(/\"/g, '')
    setError(err)
  } else if (error.message) {
    const err = JSON.stringify(error.message).replace(/\"/g, '')
    setError(err)
  }
}

export const encryptPassword = (password: string) => {
  const secretKey = CrytoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_PASSWORD_ENCRYPTION_SECRET)
  const iv = CrytoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_PASSWORD_ENCRYPTION_IV)

  const encrypted = CrytoJS.AES.encrypt(CrytoJS.enc.Utf8.parse(password), secretKey, {
    iv: iv,
    keySize: 128 / 8,
    mode: CrytoJS.mode.CBC,
    padding: CrytoJS.pad.Pkcs7
  })

  return encrypted.toString()
}
