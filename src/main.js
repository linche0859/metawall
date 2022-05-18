import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
import Button from './components/Button.vue'
import './index.css'
import 'sweetalert2/src/sweetalert2.scss'

const app = createApp(App)
app.component('Button', Button)

app.directive('img-fallback', {
  mounted(el) {
    el.addEventListener('error', () => {
      el.classList.add('hidden')
    })
  }
})
app.directive('img-avatar-fallback', {
  mounted(el) {
    el.addEventListener('error', () => {
      el.setAttribute('src', 'https://i.imgur.com/nJWDEZP.png')
    })
  }
})

app.use(router).mount('#app')
