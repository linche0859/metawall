<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { postSignIn } from '@/apis/user'
import { authError } from '@/compatibles/data'
import { clearUserInfo, setCookieToken } from '@/compatibles/method'
import GoogleAuthButton from '@/components/buttons/GoogleAuthButton.vue'
import FacebookAuthButton from '@/components/buttons/FacebookAuthButton.vue'

const loading = ref(false)
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

/**
 * 登入事件
 */
const submit = async () => {
  try {
    loading.value = true
    error.value = ''
    const { data } = await postSignIn({
      email: email.value,
      password: password.value
    })
    setCookieToken(data.token)
    router.push({ name: 'Index' })
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
    email.value = ''
    password.value = ''
  }
}

if (authError.value) {
  error.value = authError.value
  authError.value = ''
}
clearUserInfo()
</script>

<template>
  <main class="flex min-h-screen">
    <div
      class="m-auto w-full max-w-[600px] border-2 border-black-100 bg-secondary p-10 shadow-300 lg:flex lg:max-w-[869px] lg:items-center lg:py-[70px] lg:px-[48px]"
    >
      <img
        src="../assets/images/login/social-circle.png"
        alt="social circle"
        class="mx-auto lg:mr-[50px] lg:ml-0 lg:flex-shrink-0"
      />
      <div class="text-center md:min-w-[373px] lg:flex-grow">
        <h1 class="font-paytone text-[60px] leading-[84px] text-primary">
          MetaWall
        </h1>
        <p
          class="mb-[36px] font-helvetica text-2xl font-bold leading-[33px] text-black-100"
        >
          到元宇宙展開全新社交圈
        </p>
        <GoogleAuthButton class="mb-4" />
        <FacebookAuthButton class="mb-4" />
        <div class="mb-4 flex items-center text-black-100">
          <hr class="flex-grow border border-black-100" />
          <p class="flex-shrink-0 px-4">或</p>
          <hr class="flex-grow border border-black-100" />
        </div>
        <form method="post" @submit.prevent="submit">
          <input
            type="email"
            class="mb-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="password"
            class="mb-8 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Password"
            v-model="password"
          />
          <p v-show="error" class="mb-4 text-sm text-red-100" data-id="error">
            {{ error }}
          </p>
          <Button
            class="mb-4 w-full rounded-lg border-2 border-black-100 bg-primary font-azeret font-bold leading-[50px] text-white shadow-200"
            :loading="loading"
          >
            登入
          </Button>
          <router-link
            :to="{ name: 'Register' }"
            class="font-azeret leading-[22px] text-black-100"
          >
            註冊帳號
          </router-link>
        </form>
      </div>
    </div>
  </main>
</template>
