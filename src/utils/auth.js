/**
 * 導頁至 Google 登入頁面
 */
export const redirectToGoogle = () => {
  window.location.replace(`${import.meta.env.VITE_API_URL}/auth/google`)
}
