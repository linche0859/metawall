<script setup>
import { dayFormat } from '../../plugins/day'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['loaded-error-image'])
const user = props.post.user[0]
</script>

<template>
  <li class="rounded-lg border-2 border-black-100 p-6 shadow-card">
    <div class="mb-4 flex items-center">
      <img
        :src="user.avatar"
        alt="avatar"
        class="mr-4 h-[45px] w-[45px] flex-shrink-0 rounded-full object-cover"
      />
      <div class="flex-grow">
        <a
          href="./personal-wall.html"
          class="font-bold text-black-100 hover:text-primary hover:underline"
          >{{ user.name }}</a
        >
        <div class="font-baloo text-xs leading-5 text-gray-300">
          {{ dayFormat(post.createdAt) }}
        </div>
      </div>
    </div>
    <p class="text-black-100">
      {{ post.content }}
    </p>
    <img
      v-if="post.image"
      class="mt-4 rounded-lg border-2 border-black-100 object-cover"
      :src="post.image"
      alt="post image"
      @error="emit('loaded-error-image', post._id)"
    />
    <template v-if="false">
      <!-- 未按讚 -->
      <button
        class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-gray-300"
      >
        <i class="fa-regular fa-thumbs-up"></i>
        <span class="inline-block text-base leading-[22px]"
          >成為第一個按讚的朋友</span
        >
      </button>
      <!-- 已按讚 -->
      <button
        class="hidden lg:mt-4 lg:inline-block lg:text-xl lg:leading-none lg:text-primary"
      >
        <i class="fa-regular fa-thumbs-up mr-1"></i>
        <span class="inline-block font-baloo leading-[27px] text-black-100"
          >12</span
        >
      </button>
      <div class="hidden lg:mt-[18px] lg:flex lg:items-center">
        <img
          src="../../assets/images/dynamic-wall/user.png"
          alt="avatar"
          class="mr-2 h-10 w-10 flex-shrink-0 object-cover"
        />
        <div class="flex flex-grow">
          <input
            type="text"
            class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-2 px-4 text-black-100"
            placeholder="留言..."
          />
          <!-- 未發送留言 -->
          <button
            class="w-[28.89%] flex-shrink-0 border-2 border-black-100 bg-primary font-azeret text-white"
          >
            留言
          </button>
          <!-- 發送留言中 -->
          <button
            class="w-[28.89%] flex-shrink-0 border-2 border-black-100 bg-yellow-100 font-azeret text-black-100"
          >
            留言
            <span class="animate-spin text-xs">
              <i class="fa-solid fa-spinner"></i>
            </span>
          </button>
        </div>
      </div>
      <ul class="hidden lg:mt-[18px] lg:block lg:space-y-4">
        <li class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4">
          <img
            src="../../assets/images/dynamic-wall/user.png"
            alt="avatar"
            class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
          />
          <div class="flex-grow text-black-100">
            <a
              href="./personal-wall.html"
              class="hover:text-primary hover:underline"
              >希琳</a
            >
            <div class="mb-1 text-xs leading-5 text-gray-300">
              2022/1/11 10:00
            </div>
            <p>真的～我已經準備冬眠了</p>
          </div>
        </li>
        <li class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4">
          <img
            src="../../assets/images/dynamic-wall/user.png"
            alt="avatar"
            class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
          />
          <div class="flex-grow text-black-100">
            <a
              href="./personal-wall.html"
              class="hover:text-primary hover:underline"
              >波吉</a
            >
            <div class="mb-1 text-xs leading-5 text-gray-300">
              2022/1/11 10:00
            </div>
            <p>會嗎？我沒穿衣服都不覺得冷</p>
          </div>
        </li>
      </ul>
    </template>
  </li>
</template>
