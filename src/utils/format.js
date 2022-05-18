/**
 * 轉換數字至千分位顯示
 * @param {number} value 數字
 * @returns {string}
 */
export const convertToComma = (value = 0) =>
  value.toString().replace(/\B(?=(\d{3})+$)/g, ',')
