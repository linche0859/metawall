import axios from '@/plugins/axios'

/**
 * 取得會員資訊
 * @returns {promise}
 */
export const getProfile = () => axios.get('/user/profile')

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
