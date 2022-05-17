import axios from '@/plugins/axios'

/**
 * 取得會員資訊
 * @returns {promise}
 */
export const getProfile = () => axios.get('/user/profile')

/**
 * 取得特定的會員資訊
 * @param {string} userId 會員編號
 * @returns {promise}
 */
export const getSpecificProfile = (userId) =>
  axios.get(`/user/${userId}/profile`)

/**
 * 驗證是否為有效的會員
 * @param {string} userId 會員編號
 * @returns {promise}
 */
export const getUserCheck = (userId) => axios.get(`/user/${userId}/check`)

/**
 * 登入會員
 * @param {string} email 信箱
 * @param {string} password 密碼
 * @returns {promise}
 */
export const postSignIn = (payload) => axios.post('/user/sign_in', payload)

/**
 * 註冊會員
 * @param {string} name 暱稱
 * @param {string} email 信箱
 * @param {string} password 密碼
 * @returns {promise}
 */
export const postSignUp = (payload) => axios.post('/user/sign_up', payload)

/**
 * 更新會員資訊
 * @param {string} name 暱稱
 * @param {string} gender 性別
 * @returns {promise}
 */
export const patchProfile = (payload) => axios.patch('/user/profile', payload)

/**
 * 更新會員資訊
 * @param {string} password 新密碼
 * @param {string} confirm_password 確認密碼
 * @returns {promise}
 */
export const patchPassword = (payload) => axios.patch('/user/password', payload)
