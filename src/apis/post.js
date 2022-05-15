import axios from '@/plugins/axios'

/**
 * 取得貼文
 * @param {string} sort 資料排序
 * @param {string} q 關鍵字
 * @returns {promise}
 */
export const getPosts = (params) => axios.get('/posts', { params })

/**
 * 取得按讚的貼文
 * @returns {promise}
 */
export const getLikedPosts = () => axios.get('/posts/like')

/**
 * 新增貼文
 * @param {object} payload 貼文資料
 * @returns {promise}
 */
export const postOnePost = (payload) => axios.post('/post', payload)

/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 * @returns {promise}
 */
export const postLike = (postId) => axios.post(`/post/${postId}/like`)

/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 * @returns {promise}
 */
export const deleteLike = (postId) => axios.delete(`/post/${postId}/like`)

/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {string} payload.content 留言內容
 * @returns {promise}
 */
export const postMessage = (postId, payload) =>
  axios.post(`/post/${postId}/message`, payload)
