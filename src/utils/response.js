/**
 * 取得回傳的錯誤訊息
 * @param {object} error 錯誤資訊
 * @returns {string}
 */
export const getErrorContent = (error) => {
  if (typeof error === 'string') return error
  if (typeof error === 'object') {
    const { errors } = error
    const errorVals = Object.values(errors)
    if (errorVals.length) return errorVals[0].message
  }
  return error
}
