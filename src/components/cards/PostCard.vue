<script setup>
import { ref, toRefs } from 'vue'
import { dayFormat } from '@/plugins/day'
import { handleErrorAvatar, handleErrorImage } from '@/compatibles/method'
import { postLike, deleteLike, postMessage } from '@/apis/post'
import { getErrorContent } from '@/utils/response'
import globalData from '@/compatibles/data'
import swal from '@/plugins/swal'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const loading = ref(false)
const message = ref('')
const { post } = toRefs(props)
const { user } = globalData()
const emit = defineEmits(['post-like', 'delete-like', 'post-message'])

/**
 * 按讚事件
 */
const postLikeHandler = () => {
  try {
    postLike(post.value._id)
    emit('post-like', post.value._id)
  } catch (e) {
    swal({
      title: getErrorContent(e.message),
      icon: 'error'
    })
    deleteLike(post.value._id)
  }
}
/**
 * 移除按讚事件
 */
const deleteLikeHandler = () => {
  try {
    deleteLike(post.value._id)
    emit('delete-like', post.value._id)
  } catch (e) {
    swal({
      title: getErrorContent(e.message),
      icon: 'error'
    })
  }
}
/**
 * 點擊按讚事件
 */
const clickLikeHandler = () => {
  if (post.value.likes.includes(user.value._id)) return deleteLikeHandler()
  postLikeHandler()
}
/**
 * 貼文留言事件
 */
const messageHandler = async () => {
  try {
    if (!message.value) return
    loading.value = true
    const { data } = await postMessage(post.value._id, {
      content: message.value
    })
    emit('post-message', { postId: post.value._id, message: data })
    message.value = ''
  } catch (e) {
    swal({
      title: getErrorContent(e.message),
      icon: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <li class="rounded-lg border-2 border-black-100 p-6 shadow-card">
    <div class="mb-4 flex items-center">
      <img
        :src="post.user.avatar"
        alt="avatar"
        class="mr-4 h-[45px] w-[45px] flex-shrink-0 rounded-full object-cover"
        @error="handleErrorAvatar"
      />
      <div class="flex-grow">
        <a
          href="./personal-wall.html"
          class="font-bold text-black-100 hover:text-primary hover:underline"
          >{{ post.user.name }}</a
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
      @error="handleErrorImage"
    />
    <!-- 未按讚 -->
    <button
      v-if="!post.likes.length"
      class="mt-4 text-xl leading-none text-gray-300"
      @click="postLikeHandler"
    >
      <i class="fa-regular fa-thumbs-up"></i>
      <span class="inline-block text-base leading-[22px]"
        >成為第一個按讚的朋友</span
      >
    </button>
    <!-- 已按讚 -->
    <button
      v-else
      class="mt-4 text-xl leading-none text-primary"
      @click="clickLikeHandler"
    >
      <i class="fa-regular fa-thumbs-up mr-1"></i>
      <span class="inline-block font-baloo leading-[22px] text-black-100">{{
        post.likes.length
      }}</span>
    </button>
    <div class="mt-[18px] flex items-center">
      <img
        :src="user.avatar"
        alt="avatar"
        class="mr-2 h-10 w-10 flex-shrink-0 object-cover"
      />
      <div class="flex flex-grow">
        <input
          v-model="message"
          type="text"
          class="min-w-0 flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-2 px-4 text-black-100"
          placeholder="留言..."
        />
        <Button
          :loading="loading"
          class="w-[28.89%] flex-shrink-0 border-2 border-black-100 bg-primary font-azeret text-white hover:bg-yellow-100 hover:text-black-100"
          :class="{ 'cursor-not-allowed': !message }"
          @click="messageHandler"
        >
          留言
        </Button>
      </div>
    </div>
    <ul v-if="post.messages.length" class="mt-[18px] space-y-4">
      <li
        v-for="item in post.messages"
        :key="item._id"
        class="flex rounded-[12px] bg-[#EFECE7]/30 py-[18px] px-4"
      >
        <img
          :src="item.user.avatar"
          alt="avatar"
          class="mr-3 h-10 w-10 flex-shrink-0 object-cover"
          @error="handleErrorAvatar"
        />
        <div class="flex-grow text-black-100">
          <a
            href="./personal-wall.html"
            class="hover:text-primary hover:underline"
            >{{ item.user.name }}</a
          >
          <div class="mb-1 text-xs leading-5 text-gray-300">
            {{ dayFormat(item.createdAt) }}
          </div>
          <p class="break-all">{{ item.content }}</p>
        </div>
      </li>
    </ul>
  </li>
</template>
