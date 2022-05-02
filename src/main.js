import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import Button from './components/Button.vue'
import './index.css'
import 'sweetalert2/src/sweetalert2.scss'

const app = createApp(App)
app.component('Button', Button)

app.use(router).mount('#app')
