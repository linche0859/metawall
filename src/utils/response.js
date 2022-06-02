/**
 * 取得回傳的錯誤訊息
 * @param {ApiErrorResponse} error 錯誤資訊
 * @returns {string}
 */
export const getErrorContent = (error) => {
  if (typeof error === 'string') return error
  if (typeof error === 'object') {
    return Object.values(error)?.[0] ?? '發生錯誤，請重新嘗試'
  }
  return error
}
