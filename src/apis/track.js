import axios from '@/plugins/axios'

/**
 * 取得追蹤名單
 * @returns {promise}
 */
export const getTracks = () => axios.get('/tracks')
