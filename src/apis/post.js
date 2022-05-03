import axios from '@/plugins/axios'

/**
 * 取得貼文
 * @param {string} sort 資料排序
 * @param {string} q 關鍵字
 * @returns {promise}
 */
export const getPosts = (params) => axios.get('/posts', { params })

/**
 * 新增貼文
 * @param {object} payload 貼文資料
 * @returns {promise}
 */
export const postOnePost = (payload) => axios.post('/posts', payload)
