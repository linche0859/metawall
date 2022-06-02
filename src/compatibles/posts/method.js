import { deletePost as apiDeletePost } from '@/apis/post'

/**
 * 按讚貼文
 * @param {object} payload 參數
 * @param {string} payload.postId 貼文編號
 * @param {string} payload.userId 會員編號
 * @param {Array.<Post>} payload.posts 貼文列表
 */
export const postLike = ({ postId, userId, posts }) => {
  const post = posts.find((item) => item._id === postId)
  post.likes.push(userId)
}

/**
 * 移除貼文的按讚
 * @param {object} payload 參數
 * @param {string} payload.postId 貼文編號
 * @param {string} payload.userId 會員編號
 * @param {Array.<Post>} payload.posts 貼文列表
 */
export const deleteLike = ({ postId, userId, posts }) => {
  const post = posts.find((item) => item._id === postId)
  const index = post.likes.indexOf(userId)
  if (~index) post.likes.splice(index, 1)
}

/**
 * 新增貼文留言
 * @param {object} payload 參數
 * @param {string} payload.postId 貼文編號
 * @param {object} payload.message 留言資訊
 * @param {Array.<Post>} payload.posts 貼文列表
 */
export const postMessage = ({ postId, message, posts }) => {
  const post = posts.find((item) => item._id === postId)
  post.messages.unshift(message)
}

/**
 * 刪除貼文留言
 * @param {object} payload 參數
 * @param {string} payload.postId 貼文編號
 * @param {object} payload.messageId 留言編號
 * @param {Array.<Post>} payload.posts 貼文列表
 */
export const deleteMessage = ({ postId, messageId, posts }) => {
  const post = posts.find((item) => item._id === postId)
  const index = post.messages.findIndex((item) => item._id === messageId)
  if (~index) post.messages.splice(index, 1)
}

/**
 * 刪除貼文後的回呼函式
 * @callback deletePostCallback
 */
/**
 * 刪除貼文
 * @param {object} payload 參數
 * @param {string} payload.postId 貼文編號
 * @param {array} payload.posts 貼文列表
 * @param {deletePostCallback} callback 刪除貼文後的回呼函式
 */
export const deletePost = async ({ postId, posts }, callback = () => {}) => {
  const index = posts.findIndex((post) => post._id === postId)
  if (~index) posts.splice(index, 1)
  await apiDeletePost(postId)
  callback()
}
