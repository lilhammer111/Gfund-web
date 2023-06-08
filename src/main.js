import { createApp } from 'vue'
// import './style.css'
// 重置默认样式
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
