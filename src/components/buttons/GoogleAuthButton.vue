<script setup>
import { setCookieRedirectUrl } from '@/compatibles/method'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * 使用 google 登入
 */
const signInWithGoogle = () => {
  setCookieRedirectUrl(route.name)
  window.location.replace(`${import.meta.env.VITE_API_URL}/auth/google`)
}
</script>

<template>
  <button
    class="flex w-full items-center justify-center rounded-lg border-2 border-black-100 bg-white font-azeret font-bold leading-[50px] text-black-100 shadow-200"
    @click="signInWithGoogle"
  >
    <img src="@/assets/images/login/google.png" alt="google" class="mr-3" />
    繼續以 Google 登入
  </button>
</template>
