import axios from 'axios'

export const baseAxios = axios.create({
  baseURL: 'https://test.wyd.ing/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  timeout: 10 * 1000,
})

baseAxios.interceptors.request.use(
  (config: any) => {
    return config
  },

  (error: any) => {
    return Promise.reject(error)
  }
)

baseAxios.interceptors.response.use( 
  (response: any) => {
    return response
  },
  (error: any) => {
    let message: string
    try {
      message = (error as any).message
    } catch {}

    return Promise.reject(error)
  }
)
