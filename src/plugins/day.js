import dayjs from 'dayjs'

/**
 * 格式化時間
 * @param {string} date 日期時間
 * @param {string} format 格式
 * @returns {string}
 */
export const dayFormat = (date, format = 'YYYY/MM/DD HH:mm') =>
  dayjs(date).format(format)

/**
 * 取得距離現在的時間單位
 * 最小的時間單位為分鐘
 * @param {string} date 日期時間
 * @returns {string}
 */
export const dayDiff = (date) => {
  const now = dayjs()
  const diffYear = now.diff(date, 'year')
  if (diffYear) return `${diffYear} 年`

  const diffMonth = now.diff(date, 'month')
  if (diffMonth) return `${diffMonth} 月`

  const diffDay = now.diff(date, 'day')
  if (diffDay) return `${diffDay} 天`

  const diffHour = now.diff(date, 'hour')
  if (diffHour) return `${diffHour} 小時`

  const diffMinute = now.diff(date, 'minute')
  return `${diffMinute} 分鐘`
}
