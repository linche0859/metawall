import { useCookies } from '@vueuse/integrations/useCookies'
import { getProfile } from '@/apis/user'
import globalData from '@/compatibles/data'

export const authBeforeEnter = async (to, from) => {
  const cookies = useCookies()
  if (!cookies.get('token')) {
    return { name: 'Login' }
  }
  try {
    const { user } = globalData()
    if (user.value._id) return true

    const { data } = await getProfile()
    user.value = data

    if (!user.value.avatar) {
      user.value.avatar = 'https://i.imgur.com/nJWDEZP.png'
    }
  } catch (e) {
    return { name: 'Login' }
  }
}
