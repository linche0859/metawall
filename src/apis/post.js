import axios from '@/plugins/axios'

/**
 * 取得貼文
 * @async
 * @param {object} params query string
 * @param {string} params.sort 資料排序
 * @param {string} params.q 關鍵字
 * @param {number} params.page 頁碼
 * @param {number} params.limit 頁筆數
 * @returns {Promise<ApiResponse>}
 */
export const getPosts = (params) => axios.get('/posts', { params })

/**
 * 取得個人的貼文
 * @async
 * @param {string} userId 會員編號
 * @param {object} params query string
 * @param {string} params.sort 資料排序
 * @param {string} params.q 關鍵字
 * @param {number} params.page 頁碼
 * @param {number} params.limit 頁筆數
 * @returns {Promise<ApiResponse>}
 */
export const getUserPosts = (userId, params) =>
  axios.get(`/posts/${userId}/user`, { params })

/**
 * 取得按讚的貼文
 * @async
 * @returns {Promise<ApiResponse>}
 */
export const getLikedPosts = () => axios.get('/posts/like')

/**
 * 取得特定的貼文
 * @async
 * @param {string} postId 貼文編號
 * @returns {Promise<ApiResponse>}
 */
export const getSpecificPost = (postId) => axios.get(`/post/${postId}`)

/**
 * 驗證是否為有效的貼文
 * @async
 * @param {string} postId 貼文編號
 * @returns {Promise<ApiResponse>}
 */
export const getPostCheck = (postId) => axios.get(`/post/${postId}/check`)

/**
 * 新增貼文
 * @async
 * @param {object} payload 貼文資料
 * @returns {Promise<ApiResponse>}
 */
export const postOnePost = (payload) => axios.post('/post', payload)

/**
 * 按讚貼文
 * @async
 * @param {string} postId 貼文編號
 * @returns {Promise<ApiResponse>}
 */
export const postLike = (postId) => axios.post(`/post/${postId}/like`)

/**
 * 移除貼文的按讚
 * @async
 * @param {string} postId 貼文編號
 * @returns {Promise<ApiResponse>}
 */
export const deleteLike = (postId) => axios.delete(`/post/${postId}/like`)

/**
 * 新增貼文留言
 * @async
 * @param {string} postId 貼文編號
 * @param {object} payload 請求內容
 * @param {object} payload.content 留言內容
 * @returns {Promise<ApiResponse>}
 */
export const postMessage = (postId, payload) =>
  axios.post(`/post/${postId}/message`, payload)

/**
 * 刪除特定的貼文
 * @async
 * @param {string} postId 貼文編號
 * @returns {Promise<ApiResponse>}
 */
export const deletePost = (postId) => axios.delete(`/post/${postId}`)

/**
 * 刪除特定的留言
 * @async
 * @param {string} messageId 留言編號
 * @returns {Promise<ApiResponse>}
 */
export const deleteMessage = (messageId) =>
  axios.delete(`/post/${messageId}/message`)
