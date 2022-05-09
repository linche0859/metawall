import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

instance.interceptors.request.use(
  (config) => {
    const cookies = useCookies()
    const token = cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => Promise.reject(error.response.data)
)

export default instance
