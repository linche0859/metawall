<script setup>
import { setCookieRedirectUrl } from '@/compatibles/method'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * 使用 facebook 登入
 */
const signInWithFacebook = () => {
  setCookieRedirectUrl(route.name)
  window.location.replace(`${import.meta.env.VITE_API_URL}/auth/facebook`)
}
</script>

<template>
  <button
    class="flex w-full items-center justify-center rounded-lg border-2 border-black-100 bg-white font-azeret font-bold leading-[50px] text-black-100 shadow-200"
    @click="signInWithFacebook"
  >
    <img src="@/assets/images/login/facebook.png" alt="facebook" class="mr-3" />
    繼續以 Facebook 登入
  </button>
</template>
