import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://nodejs-the-week4.herokuapp.com'
})

instance.interceptors.request.use(
  (config) => {
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
