// 全域的狀態
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export const cookieToken = useCookies(['token'])
export const cookieRedirectUrl = useCookies(['redirect_url'])
export const user = ref({})
export const authError = ref('')
