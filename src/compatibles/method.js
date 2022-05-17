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
