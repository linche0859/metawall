<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { getUserPosts, deletePost } from '@/apis/post'
import { getSpecificProfile } from '@/apis/user'
import { getTracks, postTrack, deleteTrack } from '@/apis/track'
import { getErrorContent } from '@/utils/response'
import { convertToComma } from '@/utils/format'
import { postLike, deleteLike, postMessage } from '@/compatibles/posts/method'
import globalData from '@/compatibles/data'
import swal from '@/plugins/swal'
import PostFilter from '@/components/filters/PostFilter.vue'
import PostCard from '@/components/cards/PostCard.vue'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'
import Loader from '@/components/Loader.vue'

const userLoading = ref(false)
const postLoading = ref(false)
const scrollLoading = ref(false)
const sort = ref('desc')
const keyword = ref('')
const page = ref(1)
const tracks = ref([])
const posts = ref([])
const user = ref({})
const pageMeta = ref({})
const { user: me } = globalData()
const props = defineProps({
  userId: {
    type: String,
    required: true
  }
})

/**
 * 是否為自己
 * @returns {boolean}
 */
const isMe = computed(() => {
  return me.value._id === props.userId
})
/**
 * 是否已經追蹤
 * @returns {boolean}
 */
const isTracked = computed(() => {
  return tracks.value.some((item) => item._id === props.userId)
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
      getPosts(userId)
    ])
    tracks.value = tracksData.data.map((item) => item.tracking)
    user.value = userData.data
    posts.value = postData.data
    pageMeta.value = postData.meta
  } finally {
    userLoading.value = false
    postLoading.value = false
  }
}
/**
 * 取得個人的貼文
 * @param {string} userId 會員編號
 * @returns {promise}
 */
const getPosts = async (userId) => {
  const { data } = await getUserPosts(userId, {
    sort: sort.value,
    q: keyword.value,
    page: page.value
  })
  return data
}
/**
 * 設置個人的貼文
 * @param {boolean} isScrollLoading 是否為滾動視窗載入
 * @param {boolean} reset 是否需初始化貼文列表和頁碼
 */
const setPosts = async ({ isScrolling = false, reset = false } = {}) => {
  try {
    if (isScrolling) scrollLoading.value = true
    else postLoading.value = true
    if (reset) {
      page.value = 1
      posts.value = []
    }
    const { data, meta } = await getPosts(props.userId)
    posts.value.push(...data)
    pageMeta.value = meta
  } finally {
    postLoading.value = false
    scrollLoading.value = false
  }
}
/**
 * 追蹤事件
 */
const trackHandler = () => {
  try {
    if (isTracked.value) {
      deleteTrack(props.userId)

      const index = tracks.value.findIndex((item) => item._id === props.userId)
      tracks.value.splice(index, 1)
      user.value.tracking--
    } else {
      postTrack(props.userId)
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
 * 刪除貼文
 * @param {string} postId 貼文編號
 */
const deletePostHandler = async (postId) => {
  const index = posts.value.findIndex((post) => post._id === postId)
  if (~index) posts.value.splice(index, 1)
  await deletePost(postId)
  // 自動補一則新的貼文
  if (
    !postLoading.value &&
    !scrollLoading.value &&
    posts.value.length < pageMeta.value.total
  ) {
    try {
      scrollLoading.value = true
      const { data, meta } = await getPosts(props.userId)
      posts.value.push(data.pop())
      pageMeta.value = meta
    } finally {
      scrollLoading.value = false
    }
  }
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
 * 滾動視窗事件
 */
const scrollWindowHandler = () => {
  if (
    postLoading.value ||
    scrollLoading.value ||
    pageMeta.value.currentPage >= pageMeta.value.lastPage
  )
    return
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
    page.value++
    setPosts({ isScrolling: true })
  }
}

onBeforeRouteUpdate((to, from) => {
  const {
    params: { userId: toUserId }
  } = to
  if (props.userId !== toUserId) {
    page.value = 1
    initData(toUserId)
  }
})

onMounted(() => {
  window.addEventListener('scroll', scrollWindowHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollWindowHandler)
})

initData(props.userId)
</script>

<template>
  <div
    class="relative isolate mb-4 after:absolute after:right-1 after:top-1 after:z-[-1] after:h-full after:w-full after:rounded-lg after:border-2 after:border-black-100 after:content-['']"
  >
    <div
      class="flex rounded-lg border-2 border-black-100 bg-white"
      :class="{ 'min-h-[80px] items-center justify-center': userLoading }"
    >
      <template v-if="userLoading">載入中...</template>
      <template v-else>
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
        <div class="flex flex-grow items-center p-4">
          <div class="flex-grow pr-5">
            <div class="font-bold">{{ user.name }}</div>
            <p>{{ convertToComma(user.tracking) }} 人追蹤</p>
          </div>
          <button
            v-if="!isMe"
            class="flex-shrink-0 rounded-lg border-2 border-black-100 px-8 font-bold leading-8 text-black-100 shadow-200"
            :class="isTracked ? 'bg-secondary' : 'bg-yellow-100'"
            @click="trackHandler"
          >
            {{ isTracked ? '取消追蹤' : '追蹤' }}
          </button>
        </div>
      </template>
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
        @delete-post="deletePostHandler"
      />
    </ul>
    <EmptyPostCard v-else />
  </template>
  <div v-if="scrollLoading" class="mt-5 flex justify-center">
    <Loader color="text-primary" />
  </div>
</template>
