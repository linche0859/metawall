import { getProfile, getUserCheck } from '@/apis/user'
import { getPostCheck } from '@/apis/post'
import { getCookieToken } from '@/compatibles/method'
import { user } from '@/compatibles/data'

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

const checkPost = async (to, from) => {
  try {
    const auth = await checkAuth(to, from)
    if (auth === true) {
      await getPostCheck(to.params.postId)
      return true
    }
  } catch (e) {
    return { name: 'NotFound' }
  }
}

export default {
  beforeEnter: {
    checkAuth,
    checkUser,
    checkPost
  }
}
