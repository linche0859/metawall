import globalData from '@/compatibles/data'

const { cookieToken, user } = globalData()

/**
 * 清除使用者資訊
 */
export const clearUserInfo = () => {
  cookieToken.remove('token')
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
 * 設置 cookie 的 token
 * @param {string} token token
 */
export const setCookieToke = (token) => {
  cookieToken.set('token', token)
}

/**
 * 轉換數字至千分位顯示
 * @param {number} value 數字
 * @returns {string}
 */
export const convertToComma = (value = 0) =>
  value.toString().replace(/\B(?=(\d{3})+$)/g, ',')
