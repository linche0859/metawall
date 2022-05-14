import { useCookies } from '@vueuse/integrations/useCookies'
import globalData from '@/compatibles/data'

/**
 * 清除使用者資訊
 */
export const clearUserInfo = () => {
  const cookies = useCookies()
  const { user } = globalData()
  cookies.remove('token')
  user.value = {}
}

/**
 * 載入大頭照錯誤事件
 * @param {object} e image
 */
export const handleErrorAvatar = (e) => {
  e.target.src = 'https://i.imgur.com/nJWDEZP.png'
}
