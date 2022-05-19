import axios from '@/plugins/axios'

const headers = {
  'Content-Type': 'multipart/form-data'
}

/**
 * 上傳會員頭像
 * @param {formData} payload FormData
 * @returns {promise}
 */
export const postAvatar = async (payload) =>
  axios.post('/file/avatar', payload, { headers })

/**
 * 上傳圖片
 * @param {formData} payload FormData
 * @returns {promise}
 */
export const postImage = async (payload) =>
  axios.post('/file/image', payload, { headers })
