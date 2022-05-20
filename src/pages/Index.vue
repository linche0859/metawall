<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { getPosts, deletePost } from '@/apis/post'
import { postLike, deleteLike, postMessage } from '@/compatibles/posts/method'
import globalData from '@/compatibles/data'
import PostCard from '@/components/cards/PostCard.vue'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'
import PostFilter from '@/components/filters/PostFilter.vue'
import Loader from '@/components/Loader.vue'

const loading = ref(true)
const scrollLoading = ref(false)
const sort = ref('desc')
const keyword = ref('')
const page = ref(1)
const posts = ref([])
const pageMeta = ref({})
const { user } = globalData()

/**
 * 取得貼文列表
 * @returns {promise}
 */
const fetchPosts = async () => {
  const { data } = await getPosts({
    sort: sort.value,
    q: keyword.value,
    page: page.value
  })
  return data
}
/**
 * 設置貼文列表
 * @param {boolean} isScrollLoading 是否為滾動視窗載入
 * @param {boolean} reset 是否需初始化貼文列表和頁碼
 */
const setPosts = async ({ isScrolling = false, reset = false } = {}) => {
  try {
    if (isScrolling) scrollLoading.value = true
    else loading.value = true
    if (reset) {
      page.value = 1
      posts.value = []
    }
    const { data, meta } = await fetchPosts()
    posts.value.push(...data)
    pageMeta.value = meta
  } finally {
    loading.value = false
    scrollLoading.value = false
  }
}
/**
 * 切換排序事件
 * @param {string} value 排序方式
 */
const changeSort = (value) => {
  sort.value = value
  setPosts({ reset: true })
}
/**
 * 變更搜尋的關鍵字
 * @param {string} value 關鍵字
 */
const changeKeyword = (value) => {
  keyword.value = value
  setPosts({ reset: true })
}
/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLikeHandler = (postId) => {
  postLike({ postId, userId: user.value._id, posts: posts.value })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLikeHandler = (postId) => {
  deleteLike({ postId, userId: user.value._id, posts: posts.value })
}
/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {object} message 留言資訊
 */
const postMessageHandler = ({ postId, message }) => {
  postMessage({ postId, message, posts: posts.value })
}
/**
 * 刪除貼文
 * @param {string} postId 貼文編號
 */
const deletePostHandler = async (postId) => {
  const index = posts.value.findIndex((post) => post._id === postId)
  if (~index) posts.value.splice(index, 1)

  await deletePost(postId)
  // 自動補一則新的貼文
  if (
    !loading.value &&
    !scrollLoading.value &&
    posts.value.length < pageMeta.value.total
  ) {
    try {
      scrollLoading.value = true
      const { data, meta } = await fetchPosts()
      posts.value.push(data.pop())
      pageMeta.value = meta
    } finally {
      scrollLoading.value = false
    }
  }
}
/**
 * 滾動視窗事件
 */
const scrollWindowHandler = () => {
  if (
    loading.value ||
    scrollLoading.value ||
    pageMeta.value.currentPage >= pageMeta.value.lastPage
  )
    return
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
    page.value++
    setPosts({ isScrolling: true })
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollWindowHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollWindowHandler)
})

setPosts()
</script>

<template>
  <PostFilter
    class="mb-4"
    :loading="loading"
    :sort="sort"
    @change-sort="changeSort"
    @change-keyword="changeKeyword"
  />
  <empty-post-card v-if="loading">載入中...</empty-post-card>
  <template v-else>
    <ul v-if="posts.length" class="space-y-4">
      <PostCard
        v-for="post in posts"
        :key="post._id"
        :post="post"
        @post-like="postLikeHandler"
        @post-message="postMessageHandler"
        @delete-like="deleteLikeHandler"
        @delete-post="deletePostHandler"
      />
    </ul>
    <EmptyPostCard v-else />
  </template>
  <div v-if="scrollLoading" class="mt-5 flex justify-center">
    <Loader color="text-primary" />
  </div>
</template>
