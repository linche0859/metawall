<script setup>
import { ref, watch } from 'vue'
import { getPosts } from '@/apis/post'
import { postLike, deleteLike, postMessage } from '@/compatibles/posts/method'
import globalData from '@/compatibles/data'
import PostCard from '@/components/cards/PostCard.vue'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'
import PostFilter from '@/components/filters/PostFilter.vue'

const loading = ref(true)
const sort = ref('desc')
const keyword = ref('')
const posts = ref([])
const { user } = globalData()

/**
 * 設置貼文列表
 */
const setPosts = async () => {
  try {
    loading.value = true
    const { data } = await getPosts({ sort: sort.value, q: keyword.value })
    posts.value = data
  } finally {
    loading.value = false
  }
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
 * 切換排序事件
 * @param {string} value 排序方式
 */
const changeSort = (value) => {
  sort.value = value
  setPosts()
}
/**
 * 變更搜尋的關鍵字
 * @param {string} value 關鍵字
 */
const changeKeyword = (value) => {
  keyword.value = value
  setPosts()
}

watch(() => sort.value, setPosts)

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
      />
    </ul>
    <EmptyPostCard v-else />
  </template>
</template>
