<script setup>
import { ref, watch } from 'vue'
import { getPosts } from '@/apis/post'
import globalData from '@/compatibles/data'
import PostCard from '@/components/cards/PostCard.vue'

const loading = ref(true)
const sort = ref('desc')
const searchValue = ref('')
const posts = ref([])
const { user } = globalData()

/**
 * 設置貼文列表
 */
const setPosts = async () => {
  loading.value = true
  const { data } = await getPosts({ sort: sort.value, q: searchValue.value })
  posts.value = data
  loading.value = false
}
/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  post.likes.push(user.value._id)
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  const index = post.likes.indexOf(user.value._id)
  if (~index) post.likes.splice(index, 1)
}
/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {object} message 留言資訊
 */
const postMessage = ({ postId, message }) => {
  const post = posts.value.find((item) => item._id === postId)
  post.messages.unshift(message)
}

watch(() => sort.value, setPosts)

setPosts()
</script>

<template>
  <div class="mb-4 lg:flex lg:space-x-3">
    <div class="relative mb-[6px] lg:mb-0 lg:w-[29.26%] lg:flex-shrink-0">
      <select
        v-model="sort"
        class="block w-full appearance-none border-2 border-black-100 bg-white py-3 pl-4 pr-[28px] font-azeret leading-[22px] text-black-100"
      >
        <option value="" disabled>請選擇</option>
        <option value="desc" selected>最新貼文</option>
        <option value="asc" selected>貼文發佈時間</option>
      </select>
      <i
        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 text-black-100"
      ></i>
    </div>
    <div class="flex lg:flex-grow">
      <input
        v-model="searchValue"
        @keyup.enter="setPosts"
        type="text"
        class="flex-grow rounded-none border-y-2 border-l-2 border-black-100 py-3 px-4 font-azeret leading-[22px] text-black-100"
        placeholder="搜尋貼文"
      />
      <Button
        use-icon
        :loading="loading"
        class="w-[46px] flex-shrink-0 border-2 border-black-100 bg-primary text-xl text-white"
        @click="setPosts"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </Button>
    </div>
  </div>
  <template v-if="loading"> 載入中... </template>
  <template v-else>
    <ul v-if="posts.length" class="space-y-4">
      <PostCard
        v-for="post in posts"
        :key="post._id"
        :post="post"
        @post-like="postLike"
        @post-message="postMessage"
        @delete-like="deleteLike"
      />
    </ul>
    <div v-else class="rounded-lg border-2 border-black-100 shadow-card">
      <header
        class="flex space-x-[6px] border-b-2 border-black-100 py-[19px] px-4"
      >
        <div
          class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#DE4B63]"
        ></div>
        <div
          class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#FAA722]"
        ></div>
        <div
          class="h-[9px] w-[9px] rounded-full border border-gray-400 bg-[#83C51D]"
        ></div>
      </header>
      <p class="py-8 text-center text-gray-300">
        目前尚無動態，新增一則貼文吧！
      </p>
    </div>
  </template>
</template>
