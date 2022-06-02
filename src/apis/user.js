import axios from '@/plugins/axios'

/**
 * 取得會員資訊
 * @async
 * @returns {Promise.<ApiResponse>}
 */
export const getProfile = () => axios.get('/user/profile')

/**
 * 取得特定的會員資訊
 * @async
 * @param {string} userId 會員編號
 * @returns {Promise.<ApiResponse>}
 */
export const getSpecificProfile = (userId) =>
  axios.get(`/user/${userId}/profile`)

/**
 * 驗證是否為有效的會員
 * @async
 * @param {string} userId 會員編號
 * @returns {Promise.<ApiResponse>}
 */
export const getUserCheck = (userId) => axios.get(`/user/${userId}/check`)

/**
 * 登入會員
 * @async
 * @param {object} payload 請求內容
 * @param {string} payload.email 信箱
 * @param {string} payload.password 密碼
 * @returns {Promise.<ApiResponse>}
 */
export const postSignIn = (payload) => axios.post('/user/sign_in', payload)

/**
 * 註冊會員
 * @async
 * @param {object} payload 請求內容
 * @param {string} payload.name 暱稱
 * @param {string} payload.email 信箱
 * @param {string} payload.password 密碼
 * @returns {Promise.<ApiResponse>}
 */
export const postSignUp = (payload) => axios.post('/user/sign_up', payload)

/**
 * 更新會員資訊
 * @async
 * @param {object} payload 請求內容
 * @param {string} payload.name 暱稱
 * @param {string} payload.gender 性別
 * @returns {Promise.<ApiResponse>}
 */
export const patchProfile = (payload) => axios.patch('/user/profile', payload)

/**
 * 更新會員資訊
 * @async
 * @param {object} payload 請求內容
 * @param {string} payload.password 新密碼
 * @param {string} payload.confirm_password 確認密碼
 * @returns {Promise.<ApiResponse>}
 */
export const patchPassword = (payload) => axios.patch('/user/password', payload)
