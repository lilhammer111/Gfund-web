import { createRouter, createWebHashHistory } from "vue-router";
import Index from '../views/Index.vue'
import NotFound from '../views/404.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
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

export default router