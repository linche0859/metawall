/**
 * API 請求的回傳資料
 * @typedef {object} ApiResponse
 * @property {string} status 狀態
 * @property {object} data 回傳的資訊
 */

/**
 * API 請求的錯誤回傳
 * @typedef {object} ApiErrorResponse
 * @property {string} message 錯誤訊息
 */

/**
 * 會員資訊
 * @typedef {object} User
 * @property {string} _id 編號
 * @property {string} name 暱稱
 * @property {string} avatar 大頭照
 * @property {string} gender 性別
 */

/**
 * 貼文資訊
 * @typedef {object} Post
 * @property {string} _id 編號
 * @property {string} content 內容
 * @property {string} image 圖片
 * @property {User} user 發佈者
 * @property {Array.<string>} likes 按讚列表
 * @property {Array.<Message>} messages 留言列表
 */

/**
 * 留言資訊
 * @typedef {object} Message
 * @property {string} _id 編號
 * @property {string} content 留言內容
 * @property {User} user 留言者
 * @property {string} createdAt 留言時間
 */
