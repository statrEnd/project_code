import { createRouter, createWebHashHistory } from 'vue-router'

// 组件引入
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

// import Index from '../pages/aside/family/index.vue'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/family/index',
        children: [

            {
                path: 'family/index',
                component: () =>
                    import ('../pages/aside/family/index.vue')
            },
            {
                path: 'store/storelist',
                component: () =>
                    import ('../pages/aside/store/store.vue')
            },
            {
                path: 'user/userlist',
                component: () =>
                    import ('../pages/aside/user/User.vue')
            },
            {
                path: 'goods/goodslist',
                component: () =>
                    import ('../pages/aside/goods/Goods.vue')
            },
            {
                path: 'order/orderlist',
                component: () =>
                    import ('../pages/aside/order/Order.vue')
            },
            {
                path: 'marketing/marketinglist',
                component: () =>
                    import ('../pages/aside/marketing/Marketing.vue')
            },
            {
                path: 'analysis/analysislist',
                component: () =>
                    import ('../pages/aside/Analysis/Analysis.vue')
            },
            {
                path: 'power/powerlist',
                component: () =>
                    import ('../pages/aside/power/Power.vue')
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router