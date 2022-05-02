import Swal from 'sweetalert2'

/**
 * 提醒彈窗
 * @param {string} title
 * @param {string} text
 * @param {string} icon
 * @param {string} confirmButtonText
 */
export default (option = {}) => {
  Swal.fire(option)
}
