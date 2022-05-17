<script setup>
import { ref, computed, toRefs } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { getUserPosts } from '@/apis/post'
import { getSpecificProfile } from '@/apis/user'
import { getTracks, postTrack, deleteTrack } from '@/apis/track'
import { getErrorContent } from '@/utils/response'
import { convertToComma } from '@/compatibles/method'
import { postLike, deleteLike, postMessage } from '@/compatibles/posts/method'
import globalData from '@/compatibles/data'
import swal from '@/plugins/swal'
import PostFilter from '@/components/filters/PostFilter.vue'
import PostCard from '@/components/cards/PostCard.vue'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'

const userLoading = ref(false)
const postLoading = ref(false)
const sort = ref('desc')
const keyword = ref('')
const tracks = ref([])
const posts = ref([])
const user = ref({})
const { user: me } = globalData()
const props = defineProps({
  userId: {
    type: String,
    required: true
  }
})
const { userId } = toRefs(props)

/**
 * 是否為自己
 * @returns {boolean}
 */
const isMe = computed(() => {
  return me.value._id === userId.value
})
/**
 * 是否已經追蹤
 * @returns {boolean}
 */
const isTracked = computed(() => {
  return tracks.value.some((item) => item._id === userId.value)
})

/**
 * 初始化畫面的值
 * @param {string} userId 會員編號
 */
const initData = async (userId) => {
  try {
    userLoading.value = true
    postLoading.value = true
    const [tracksData, userData, postData] = await Promise.all([
      getTracks(),
      getSpecificProfile(userId),
      getPosts()
    ])
    tracks.value = tracksData.data.map((item) => item.tracking)
    user.value = userData.data
    posts.value = postData.data
  } finally {
    userLoading.value = false
    postLoading.value = false
  }
}
/**
 * 取得個人的貼文
 * @returns {promise}
 */
const getPosts = async () => {
  const data = await getUserPosts(userId.value, {
    sort: sort.value,
    q: keyword.value
  })
  return data
}
/**
 * 設置個人的貼文
 */
const setPosts = async () => {
  postLoading.value = true
  const { data } = await getPosts()
  posts.value = data
  postLoading.value = false
}
/**
 * 追蹤事件
 */
const trackHandler = () => {
  try {
    if (isTracked.value) {
      deleteTrack(userId.value)

      const index = tracks.value.findIndex((item) => item._id === userId.value)
      tracks.value.splice(index, 1)
      user.value.tracking--
    } else {
      postTrack(userId.value)
      tracks.value.push(user.value)
      user.value.tracking++
    }
  } catch (e) {
    swal({
      title: getErrorContent(e.message),
      icon: 'error'
    })
  }
}
/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLikeHandler = (postId) => {
  postLike({ postId, userId: me.value._id, posts: posts.value })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLikeHandler = (postId) => {
  deleteLike({ postId, userId: me.value._id, posts: posts.value })
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

onBeforeRouteUpdate((to, from) => {
  const {
    params: { userId: toUserId }
  } = to
  if (userId.value !== toUserId) {
    initData(toUserId)
    userId.value = toUserId
  }
})

initData(userId.value)
</script>

<template>
  <div
    class="relative isolate mb-4 after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:rounded-lg after:border-2 after:border-black-100 after:content-['']"
  >
    <div class="flex rounded-lg border-2 border-black-100 bg-white">
      <div
        class="min-h-[80px] w-[20%] flex-shrink-0 border-r-2 border-black-100 lg:w-[15%]"
      >
        <img
          v-img-avatar-fallback
          :src="user.avatar"
          class="h-full w-full rounded-l-lg object-cover"
          alt="avatar"
        />
      </div>
      <div
        v-if="userLoading"
        class="flex flex-grow items-center justify-center"
      >
        載入中...
      </div>
      <div v-else class="flex flex-grow items-center p-4">
        <div class="flex-grow pr-5">
          <div class="font-bold">{{ user.name }}</div>
          <p>{{ convertToComma(user.tracking) }} 人追蹤</p>
        </div>
        <button
          v-if="!isMe"
          class="flex-shrink-0 rounded-lg border-2 border-black-100 px-8 font-bold leading-8 text-black-100 shadow-btn"
          :class="isTracked ? 'bg-secondary' : 'bg-yellow-100'"
          @click="trackHandler"
        >
          {{ isTracked ? '取消追蹤' : '追蹤' }}
        </button>
      </div>
    </div>
  </div>
  <PostFilter
    class="mb-4"
    :loading="postLoading"
    :sort="sort"
    @change-sort="changeSort"
    @change-keyword="changeKeyword"
  />
  <empty-post-card v-if="postLoading">載入中...</empty-post-card>
  <template v-else>
    <ul v-if="posts.length" class="space-y-5">
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
