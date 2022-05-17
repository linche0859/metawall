// 全域的狀態
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookieToken = useCookies(['token'])
const user = ref({})

export default () => {
  return { cookieToken, user }
}
