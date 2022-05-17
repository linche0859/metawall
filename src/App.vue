<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import globalData from '@/compatibles/data'

const noLayoutRoutes = ['Login', 'Register', 'NotFound']
const route = useRoute()
const showLayout = ref(false)
const { user } = globalData()

watch(
  () => route.name,
  (name) => {
    showLayout.value = !noLayoutRoutes.includes(name)
  }
)
</script>

<template>
  <template v-if="showLayout">
    <header class="border-b-[3px] border-black-100">
      <div
        class="flex justify-between px-4 lg:mx-auto lg:max-w-[869px] lg:px-0"
      >
        <h1>
          <router-link
            :to="{ name: 'Index' }"
            class="block py-4 font-paytone text-2xl leading-[34px] text-black-100 lg:py-3 lg:text-[26px] lg:leading-[36px]"
            >MetaWall
          </router-link>
        </h1>
        <div class="group relative flex items-center py-4 lg:py-3">
          <img
            v-img-avatar-fallback
            :src="user.avatar"
            alt="avatar"
            class="mr-[10px] h-[30px] w-[30px] flex-shrink-0 rounded-full object-cover"
          />
          <div
            class="border-b-2 border-black-100 px-1 pb-1 font-azeret font-bold leading-[19px] text-black-100"
          >
            {{ user.name }}
          </div>
          <div
            class="absolute right-0 top-[calc(100%-8px)] isolate z-[1] hidden w-[182px] group-hover:block lg:right-auto lg:-left-1"
          >
            <div
              class="absolute top-2 left-2 z-[-1] h-full w-full border-2 border-black-100 bg-white"
            ></div>
            <ul
              class="divide-y-2 divide-black-100 border-2 border-black-100 bg-white text-center text-black-100"
            >
              <li>
                <router-link
                  :to="{ name: 'User', params: { userId: user._id } }"
                  class="block py-2 hover:bg-[#EFECE7]"
                  >我的貼文牆</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'Profile' }"
                  class="block py-2 hover:bg-[#EFECE7]"
                  >修改個人資料</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'Login' }"
                  class="block py-2 hover:bg-[#EFECE7]"
                >
                  登出
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main
      class="px-3 pt-4 pb-[102px] lg:mx-auto lg:flex lg:max-w-[869px] lg:px-0 lg:py-[49px]"
    >
      <section class="lg:mr-[27px] lg:flex-grow">
        <router-view></router-view>
      </section>
      <nav
        class="fixed inset-x-0 bottom-4 px-2 lg:static lg:bottom-0 lg:w-[35.55%] lg:flex-shrink-0 lg:self-start lg:border-2 lg:border-black-100 lg:py-8 lg:px-6"
      >
        <router-link
          :to="{ name: 'Post' }"
          class="hidden text-center shadow-btn lg:mb-6 lg:block lg:w-full lg:rounded-lg lg:border-2 lg:border-black-100 lg:bg-primary lg:font-azeret lg:font-bold lg:leading-[50px] lg:text-white lg:hover:bg-yellow-100 lg:hover:text-black-100"
        >
          張貼動態
        </router-link>
        <ul
          class="flex justify-center space-x-[25px] rounded-[32px] border-[3px] border-black-100 bg-secondary py-2 lg:block lg:space-x-0 lg:space-y-[22px] lg:rounded-none lg:border-0 lg:bg-transparent lg:py-0"
        >
          <li class="lg:hidden">
            <router-link
              :to="{ name: 'Index' }"
              class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl text-black-100 hover:bg-primary hover:text-white"
            >
              <i class="fa-solid fa-house"></i>
            </router-link>
          </li>
          <li class="hidden lg:block">
            <router-link
              :to="{ name: 'User', params: { userId: user._id } }"
              class="block text-black-100 hover:text-primary"
            >
              <img
                v-img-avatar-fallback
                :src="user.avatar"
                alt="avatar"
                class="mr-3 inline-block h-[50px] w-[50px] rounded-full object-cover"
              />
              <span class="align-middle font-bold">{{ user.name }}</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Track' }"
              class="peer group block text-black-100 hover:text-primary"
            >
              <span
                class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl group-hover:bg-primary group-hover:text-white lg:mr-3 lg:inline-block lg:h-[50px] lg:w-[50px] lg:border-2 lg:bg-[#E2EDFA] lg:text-center lg:leading-[45px]"
              >
                <i class="fa-regular fa-bell"></i>
              </span>
              <span class="hidden font-bold lg:inline">追蹤名單</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Like' }"
              class="group block text-black-100 hover:text-primary"
            >
              <span
                class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-white text-xl group-hover:bg-primary group-hover:text-white lg:mr-3 lg:inline-block lg:h-[50px] lg:w-[50px] lg:border-2 lg:bg-[#E2EDFA] lg:text-center lg:leading-[45px]"
              >
                <i class="fa-regular fa-thumbs-up"></i>
              </span>
              <span class="hidden font-bold lg:inline">我按讚的文章</span>
            </router-link>
          </li>
          <li class="lg:hidden">
            <router-link
              :to="{ name: 'Post' }"
              class="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-black-100 bg-primary text-xl text-white"
            >
              <i class="fa-solid fa-plus"></i>
            </router-link>
          </li>
        </ul>
      </nav>
    </main>
  </template>
  <router-view v-else></router-view>
</template>

<style></style>
