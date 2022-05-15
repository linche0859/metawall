<script setup>
import { ref } from 'vue'
import { getLikedPosts, deleteLike } from '@/apis/post'
import { getErrorContent } from '@/utils/response'
import { handleErrorAvatar } from '@/compatibles/method'
import { dayFormat } from '@/plugins/day'
import swal from '@/plugins/swal'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'

const likes = ref([])
const loading = ref(false)

/**
 * 設置按讚的貼文列表
 */
const setLikes = async () => {
  try {
    loading.value = true
    const { data } = await getLikedPosts()
    likes.value = data
  } finally {
    loading.value = false
  }
}
/**
 * 移除按讚事件
 */
const deleteLikeHandler = (postId) => {
  try {
    deleteLike(postId)
    const index = likes.value.findIndex((item) => item._id === postId)
    if (~index) likes.value.splice(index, 1)
  } catch (e) {
    swal({
      title: getErrorContent(e.message),
      icon: 'error'
    })
  }
}

setLikes()
</script>

<template>
  <h2
    class="relative isolate mb-4 after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:border-2 after:border-black-100 after:content-['']"
  >
    <div
      class="border-2 border-black-100 bg-white py-[18px] text-center font-azeret text-xl font-bold text-black-100"
    >
      我按讚的貼文
    </div>
  </h2>
  <empty-post-card v-if="loading">載入中...</empty-post-card>
  <template v-else>
    <ul v-if="likes.length" class="space-y-4">
      <li
        v-for="item in likes"
        :key="item._id"
        class="flex items-center rounded-lg border-2 border-black-100 py-[18px] px-4 shadow-card lg:pr-10"
      >
        <img
          :src="item.user.avatar"
          alt="avatar"
          class="mr-4 h-10 w-10 flex-shrink-0 rounded-full object-cover"
          @error="handleErrorAvatar"
        />
        <div class="flex-grow pr-5">
          <a
            href="./personal-wall.html"
            class="font-bold text-black-100 hover:text-primary hover:underline"
            >{{ item.user.name }}</a
          >
          <div class="text-sm text-gray-300">
            發文時間：<span class="font-baloo">{{
              dayFormat(item.createdAt)
            }}</span>
          </div>
        </div>
        <button
          class="mr-5 flex flex-shrink-0 flex-col items-center text-xl leading-none text-primary lg:mr-[37px]"
          @click="deleteLikeHandler(item._id)"
        >
          <i class="fa-regular fa-thumbs-up"></i>
          <span class="mt-1 text-sm font-bold text-black-100">取消</span>
        </button>
        <a
          href="./personal-wall.html"
          class="flex flex-shrink-0 flex-col items-center text-xl leading-none text-black-100"
        >
          <i class="fa-regular fa-circle-right"></i>
          <span class="mt-1 text-sm font-bold">查看</span>
        </a>
      </li>
    </ul>
    <empty-post-card v-else>目前尚無按讚的貼文</empty-post-card>
  </template>
</template>
