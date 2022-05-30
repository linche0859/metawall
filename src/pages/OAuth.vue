<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCookieRedirectUrl, setCookieToken } from '@/compatibles/method'
import { authError } from '@/compatibles/data'

const route = useRoute()
const router = useRouter()
onMounted(() => {
  const {
    query: { token, error }
  } = route
  if (error) {
    authError.value = decodeURIComponent(error)
    return router.replace({ name: getCookieRedirectUrl() || 'Login' })
  }
  if (token) {
    setCookieToken(token)
  }
  router.replace({ name: 'Index' })
})
</script>

<template>
  <div></div>
</template>
