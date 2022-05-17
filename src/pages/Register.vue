<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { postSignUp } from '@/apis/user'
import { setCookieToke, clearUserInfo } from '@/compatibles/method'

const loading = ref(false)
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const nameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const router = useRouter()

/**
 * 註冊事件
 */
const submit = async () => {
  try {
    loading.value = true
    error.value = ''
    nameError.value = ''
    emailError.value = ''
    passwordError.value = ''
    const { data } = await postSignUp({
      name: name.value,
      email: email.value,
      password: password.value
    })
    setCookieToke(data.token)
    router.push({ name: 'Index' })
  } catch (e) {
    const { message } = e
    if (typeof message === 'object') {
      console.log(message)
      Object.keys(message).forEach((key) => {
        console.log('key', key)
        switch (key) {
          case 'name':
            nameError.value = message[key]
            break
          case 'email':
            emailError.value = message[key]
            break
          case 'password':
            passwordError.value = message[key]
            break
        }
      })
    } else {
      error.value = message
    }
  } finally {
    loading.value = false
  }
}

clearUserInfo()
</script>

<template>
  <main class="flex min-h-screen">
    <div
      class="m-auto flex max-w-[869px] items-center border-2 border-black-100 bg-[#EFECE7] py-[70px] px-[48px]"
      style="box-shadow: -8px 8px 0px #00040029"
    >
      <img
        src="../assets/images/login/social-circle.png"
        alt="social circle"
        class="mr-[50px] flex-shrink-0"
      />
      <div class="min-w-[373px] flex-grow text-center">
        <h1 class="font-paytone text-[60px] leading-[84px] text-primary">
          MetaWall
        </h1>
        <p
          class="mb-[36px] font-helvetica text-2xl font-bold leading-[33px] text-black-100"
        >
          註冊
        </p>
        <form method="post" @submit.prevent="submit">
          <input
            type="text"
            class="block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 leading-[19px] text-black-100"
            placeholder="暱稱"
            v-model="name"
          />
          <p
            v-show="nameError"
            class="mt-1 text-left text-sm text-red-100"
            data-id="error"
          >
            {{ nameError }}
          </p>
          <input
            type="email"
            class="mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Email"
            v-model="email"
          />
          <p
            v-show="emailError"
            class="mt-1 text-left text-sm text-red-100"
            data-id="error"
          >
            {{ emailError }}
          </p>
          <input
            type="password"
            class="mt-4 block w-full rounded-none border-2 border-black-100 bg-white py-4 px-6 font-azeret leading-[19px] text-black-100"
            placeholder="Password"
            v-model="password"
          />
          <p
            v-show="passwordError"
            class="mt-1 text-left text-sm text-red-100"
            data-id="error"
          >
            {{ passwordError }}
          </p>
          <p v-show="error" class="mt-8 text-sm text-red-100" data-id="error">
            {{ error }}
          </p>
          <Button
            :loading="loading"
            class="block w-full rounded-lg border-2 border-gray-100 bg-gray-200 font-azeret font-bold leading-[50px] text-white"
            :class="error ? 'mt-4' : 'mt-8'"
          >
            註冊
          </Button>
          <router-link
            :to="{ name: 'Login' }"
            class="mt-4 inline-block font-azeret leading-[22px] text-black-100"
          >
            登入
          </router-link>
        </form>
      </div>
    </div>
  </main>
</template>
