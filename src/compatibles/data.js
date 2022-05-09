// 全域的狀態

import { ref } from 'vue'

const user = ref({})

export default () => {
  return { user }
}
