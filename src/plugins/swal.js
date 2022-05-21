import Swal from 'sweetalert2'

/**
 * 提醒彈窗
 * @param {string} title
 * @param {string} text
 * @param {string} icon
 * @param {string} confirmButtonText
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
