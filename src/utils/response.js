/**
 * 取得回傳的錯誤訊息
 * @param {object} error 錯誤資訊
 * @returns {string}
 */
export const getErrorContent = (error) => {
  if (typeof error === 'string') return error
  if (typeof error === 'object') {
    const { errors } = error
    const errorValues = Object.values(errors)
    if (errorValues.length) return errorValues[0].message
  }
  return error
}
