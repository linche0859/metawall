import Swal from 'sweetalert2'

/**
 * 提醒彈窗
 * @async
 * @param {object} option 設定參數
 * @param {string} [option.title] 標題
 * @param {string} [option.text] 說明內容
 * @param {string} [option.icon] 圖示
 * @param {string} [option.confirmButtonText] 確認按鈕文字
 * @return {Promise.<SweetAlertResult>}
 */
export default async (option = {}) => {
  const currentOption = {
    icon: 'success',
    confirmButtonText: '確定',
    timer: 1500,
    confirmButtonColor: '#03438D'
  }
  Object.assign(currentOption, option)
  const result = await Swal.fire(currentOption)
  return result
}
