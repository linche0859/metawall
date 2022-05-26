import { cookieToken, cookieRedirectUrl, user } from '@/compatibles/data'

/**
 * 清除使用者資訊
 */
export const clearUserInfo = () => {
  cookieToken.remove('token')
  cookieRedirectUrl.remove('redirect_url')
  user.value = {}
}

/**
 * 取得 cookie 的 token
 * @returns {string}
 */
export const getCookieToken = () => {
  return cookieToken.get('token')
}

/**
 * 取得 cookie 的導向位置
 * @returns {string}
 */
export const getCookieRedirectUrl = () => {
  return cookieRedirectUrl.get('redirect_url')
}

/**
 * 設置 cookie 的 token
 * @param {string} token token
 */
export const setCookieToken = (token) => {
  cookieToken.set('token', token)
}

/**
 * 設置 cookie 的導向位置
 * @param {string} url 導向位置
 * @returns {string}
 */
export const setCookieRedirectUrl = (url) => {
  return cookieRedirectUrl.set('redirect_url', url)
}
