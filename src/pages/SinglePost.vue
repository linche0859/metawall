<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getSpecificPost } from '@/apis/post'
import { user } from '@/compatibles/data'
import {
  postLike,
  deleteLike,
  postMessage,
  deleteMessage,
  deletePost
} from '@/compatibles/posts/method'
import PostCard from '@/components/cards/PostCard.vue'
import EmptyPostCard from '@/components/cards/EmptyPostCard.vue'

const props = defineProps({
  postId: {
    type: String,
    required: true
  }
})
const loading = ref(false)
const posts = ref([])
const router = useRouter()

/**
 * 設置貼文資訊
 */
const setPost = async () => {
  try {
    loading.value = true
    const { data } = await getSpecificPost(props.postId)
    posts.value.push(data)
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
 * 刪除留言
 * @param {string} messageId 留言編號
 * @param {string} postId 貼文編號
 */
const deleteMessageHandler = (messageId, postId) => {
  deleteMessage({ postId, messageId, posts: posts.value })
}
/**
 * 刪除貼文
 * @param {string} postId 貼文編號
 */
const deletePostHandler = (postId) => {
  deletePost({ postId, posts: posts.value }, () => {
    router.push({ name: 'Index' })
  })
}

setPost()
</script>

<template>
  <empty-post-card v-if="loading">載入中...</empty-post-card>
  <template v-else>
    <transition-group
      v-if="posts.length"
      tag="ul"
      name="fade"
      class="space-y-4"
    >
      <PostCard
        v-for="post in posts"
        :key="post._id"
        :post="post"
        @post-like="postLikeHandler"
        @post-message="postMessageHandler"
        @delete-like="deleteLikeHandler"
        @delete-post="deletePostHandler"
        @delete-message="deleteMessageHandler"
      />
    </transition-group>
    <EmptyPostCard v-else />
  </template>
</template>
