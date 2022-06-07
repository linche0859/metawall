import axios from '@/plugins/axios'

const headers = {
  'Content-Type': 'multipart/form-data'
}

/**
 * 上傳圖片
 * @async
 * @param {object} payload 請求參數
 * @param {object} payload.params query string
 * @param {string} payload.params.type 上傳類型
 * @param {FormData} payload.payload FormData
 * @returns {Promise<ApiResponse>}
 */
export const postImage = async ({ params, payload }) =>
  axios.post('/file/image', payload, { params, headers })
