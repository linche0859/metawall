import dayjs from 'dayjs'

export const dayFormat = (date, format = 'YYYY/MM/DD HH:mm') =>
  dayjs(date).format(format)
