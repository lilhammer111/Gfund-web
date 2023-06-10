import { createRouter, createWebHashHistory } from "vue-router";
import Index from '../views/Index.vue'
import NotFound from '../views/404.vue'
import { getNav } from '../api/api'
import { useMainStore } from '../stores/index'
import App from '../App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const store = useMainStore()


const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        children: []
        // 用addRoute动态加载子路由
        // children: [
        //     {
        //         path: '/product',
        //         name: 'product',
        //         component: () => import('../views/layout/main_content/Product.vue')
        //     },
        // ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/login',
        name: 'login',
        // 懒加载
        component: () => import('../views/login/Login.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach(async (to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        if (store && store.nav.length == 0) {
            // 发送请求获取数据
            const res = await getNav()
            // 数据缓存
            store.setNav(res.data)
            // 按照不同权限动态路由添加
            // const route = res.data.route
            // router.addRoute('index', route)
            const indexRoutes = addIndexSonRoute(res.data)
            router.addRoute(indexRoutes)
            // next啥意思？
            next({ path: to.path })
        } else {
            next()
        }

    }
})

const addIndexSonRoute = (data) => {
    let indexRoutes = routes.filter(v => v.path == '/')[0]
    data.forEach(item => {
        indexRoutes.children.push({
            path: item.path,
            name: item.name,
            component: () => import(`../views/layout/main_content/${item.component}.vue`)
        })
    })
    return indexRoutes
}

export default router