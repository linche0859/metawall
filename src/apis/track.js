import axios from '@/plugins/axios'

/**
 * 取得追蹤名單
 * @returns {promise}
 */
export const getTracks = () => axios.get('/tracks')

/**
 * 追蹤特定的會員
 * @param {string} userId 會員編號
 * @returns {promise}
 */
export const postTrack = (userId) => axios.post(`/track/${userId}`)

/**
 * 取消追蹤特定的會員
 * @param {string} userId 會員編號
 * @returns {promise}
 */
export const deleteTrack = (userId) => axios.delete(`/track/${userId}`)
