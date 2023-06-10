import { createApp } from 'vue'
import './style.css'
// 重置默认样式
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
