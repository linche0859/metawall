import axios from '@/plugins/axios'

const headers = {
  'Content-Type': 'multipart/form-data'
}

/**
 * 上傳圖片
 * @param {string} params.type 上傳類型
 * @param {formData} payload FormData
 * @returns {promise}
 */
export const postImage = async ({ params, payload }) =>
  axios.post('/file/image', payload, { params, headers })
