import { getProfile, getUserCheck } from '@/apis/user'
import {
  getCookieToken,
  getCookieRedirectUrl,
  setCookieToken
} from '@/compatibles/method'
import { user, authError } from '@/compatibles/data'

const checkAuth = async (to, from) => {
  if (!getCookieToken()) {
    return { name: 'Login' }
  }
  try {
    if (user.value._id) return true

    const { data } = await getProfile()
    user.value = data
    return true
  } catch (e) {
    return { name: 'Login' }
  }
}

const checkUser = async (to, from) => {
  try {
    const auth = await checkAuth(to, from)
    if (auth === true) {
      await getUserCheck(to.params.userId)
      return true
    }
  } catch (e) {
    return { name: 'NotFound' }
  }
}

const checkToken = async (to, from) => {
  const {
    query: { token, error }
  } = to
  if (error) {
    authError.value = decodeURIComponent(error)
    return { name: getCookieRedirectUrl() || 'Login' }
  }
  if (token) {
    setCookieToken(token)
  }
  const auth = await checkAuth(to, from)
  return auth
}

export default {
  beforeEnter: {
    checkAuth,
    checkUser,
    checkToken
  }
}
