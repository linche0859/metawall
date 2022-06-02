// 全域的狀態
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export const cookieToken = useCookies(['token'])
export const cookieRedirectUrl = useCookies(['redirect_url'])
/** 登入的會員資訊 */
export const user = ref({})
/** 身份驗證的錯誤訊息 */
export const authError = ref('')
