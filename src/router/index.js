import { createRouter, createWebHashHistory } from "vue-router";
import Index from '../views/Index.vue'
import NotFound from '../views/404.vue'
import { getNav } from '../api/api'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
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
    if (to.path == '/login') {
        next()
    } else {
        const res = await getNav()
        const route = res.data.route
        router.addRoute('index', route)
    }
})

export default router