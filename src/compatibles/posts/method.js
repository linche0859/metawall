/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 * @param {string} userId 會員編號
 * @param {array} posts 貼文列表
 */
export const postLike = ({ postId, userId, posts }) => {
  const post = posts.find((item) => item._id === postId)
  post.likes.push(userId)
}

/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 * @param {string} userId 會員編號
 * @param {array} posts 貼文列表
 */
export const deleteLike = ({ postId, userId, posts }) => {
  const post = posts.find((item) => item._id === postId)
  const index = post.likes.indexOf(userId)
  if (~index) post.likes.splice(index, 1)
}

/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {object} message 留言資訊
 * @param {array} posts 貼文列表
 */
export const postMessage = ({ postId, message, posts }) => {
  const post = posts.find((item) => item._id === postId)
  post.messages.unshift(message)
}
