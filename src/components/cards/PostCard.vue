<script setup>
import { ref, toRefs, computed } from 'vue'
import { dayFormat } from '@/plugins/day'
import { DOMSanitize } from '@/plugins/dompurify'
import { postLike, deleteLike, postMessage, deleteMessage } from '@/apis/post'
import { getErrorContent } from '@/utils/response'
import { user } from '@/compatibles/data'
import swal from '@/plugins/swal'
import MorePopover from '@/components/popovers/MorePopover.vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const loading = ref(false)
const message = ref('')
const { post } = toRefs(props)
const emit = defineEmits([
  'post-like',
  'delete-like',
  'post-message',
  'delete-post',
  'delete-message'
])
const isMe = computed(() => {
  return user.value._id === post.value.user._id
})

/**
 * 確認的 modal
 * @param {string} title 標題
 */
const confirmSwal = async (title) => {
  const result = await swal({
    icon: 'question',
    title,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
    confirmButtonColor: '#EF4444',
    timer: 0
  })
  return result
}
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
/**
 * 點擊編輯貼文事件
 */
const clickEditPostHandler = () => {
  alert('編輯貼文功能，施工中...')
}
/**
 * 點擊刪除貼文事件
 */
const clickDeletePostHandler = async () => {
  const result = await confirmSwal('確定要刪除這篇貼文？')
  if (result.isConfirmed) {
    emit('delete-post', post.value._id)
  }
}
/**
 * 點擊編輯留言事件
 */
const clickEditMessageHandler = () => {
  alert('編輯留言功能，施工中...')
}
/**
 * 點擊刪除留言事件
 * @param {string} messageId 留言編號
 */
const clickDeleteMessageHandler = async (messageId) => {
  const result = await confirmSwal('確定要刪除這則留言？')
  if (result.isConfirmed) {
    deleteMessage(messageId)
    emit('delete-message', messageId, post.value._id)
  }
}
</script>

<template>
  <li class="rounded-lg border-2 border-black-100 p-6 shadow-100">
    <div class="mb-4 flex items-center">
      <img
        v-img-avatar-fallback
        :src="post.user.avatar"
        alt="avatar"
        class="mr-4 h-[45px] w-[45px] flex-shrink-0 rounded-full object-cover"
      />
      <div class="flex-grow">
        <router-link
          :to="{ name: 'User', params: { userId: post.user._id } }"
          class="font-bold text-black-100 hover:text-primary hover:underline"
          >{{ post.user.name }}</router-link
        >
        <div class="font-baloo text-xs leading-5 text-gray-300">
          {{ dayFormat(post.createdAt) }}
        </div>
      </div>
      <more-popover v-if="isMe" class="ml-3 flex-shrink-0">
        <ul
          class="shadow min-w-[120px] divide-y divide-secondary whitespace-nowrap rounded-lg border-2 border-black-100 bg-white py-1 px-3 text-black-100"
        >
          <li class="py-2">
            <button
              class="block w-full rounded-md p-2 hover:bg-secondary/70"
              @click.stop="clickEditPostHandler"
              @mousedown.prevent
            >
              <i class="far fa-edit"></i>
              編輯貼文
            </button>
          </li>
          <li class="py-2">
            <button
              class="block w-full rounded-md p-2 text-red-500 hover:bg-secondary/70"
              @click.stop="clickDeletePostHandler"
              @mousedown.prevent
            >
              <i class="fas fa-trash-alt mr-1"></i>
              刪除貼文
            </button>
          </li>
        </ul>
      </more-popover>
    </div>
    <p
      class="whitespace-pre-wrap text-black-100"
      v-html="DOMSanitize(post.content)"
    ></p>
    <img
      v-if="post.image"
      v-img-fallback
      class="mt-4 rounded-lg object-cover"
      :src="post.image"
      alt="post image"
    />
    <!-- 未按讚 -->
    <button
      v-if="!post.likes.length"
      class="mt-4 text-xl leading-none text-gray-300"
      @click="postLikeHandler"
    >
      <i class="fa-regular fa-thumbs-up mr-1"></i>
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
        v-img-avatar-fallback
        :src="user.avatar"
        alt="avatar"
        class="mr-2 h-10 w-10 flex-shrink-0 rounded-full object-cover"
      />
      <div class="flex flex-grow">
        <input
          v-model.trim="message"
          type="text"
          class="w-[71.11%] rounded-none border-y-2 border-l-2 border-black-100 py-2 px-4 text-black-100"
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
    <transition-group
      v-if="post.messages.length"
      tag="ul"
      name="slide"
      class="mt-[18px] space-y-4 text-black-100"
    >
      <li
        v-for="item in post.messages"
        :key="item._id"
        class="rounded-[12px] bg-secondary/30 py-[18px] px-4"
      >
        <div class="mb-1 flex items-center">
          <img
            v-img-avatar-fallback
            :src="item.user.avatar"
            alt="avatar"
            class="mr-3 h-10 w-10 flex-shrink-0 rounded-full object-cover"
          />
          <div class="flex-grow">
            <router-link
              :to="{ name: 'User', params: { userId: item.user._id } }"
              class="hover:text-primary hover:underline"
              >{{ item.user.name }}</router-link
            >
            <div class="text-xs leading-5 text-gray-300">
              {{ dayFormat(item.createdAt) }}
            </div>
          </div>
          <more-popover
            v-if="item.user._id === user._id"
            class="ml-3 flex-shrink-0"
          >
            <ul
              class="shadow min-w-[120px] divide-y divide-secondary whitespace-nowrap rounded-lg border-2 border-black-100 bg-white py-1 px-3 text-black-100"
            >
              <li class="py-2">
                <button
                  class="block w-full rounded-md p-2 hover:bg-secondary/70"
                  @click.stop="clickEditMessageHandler"
                  @mousedown.prevent
                >
                  <i class="far fa-edit"></i>
                  編輯留言
                </button>
              </li>
              <li class="py-2">
                <button
                  class="block w-full rounded-md p-2 text-red-500 hover:bg-secondary/70"
                  @click.stop="clickDeleteMessageHandler(item._id)"
                  @mousedown.prevent
                >
                  <i class="fas fa-trash-alt mr-1"></i>
                  刪除留言
                </button>
              </li>
            </ul>
          </more-popover>
        </div>
        <p class="break-all pl-[52px]">{{ item.content }}</p>
      </li>
    </transition-group>
  </li>
</template>
