import axios from '@/plugins/axios'

/**
 * 取得會員資訊
 * @returns {promise}
 */
export const getMe = () => axios.get('/user/me')

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
