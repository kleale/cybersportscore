import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import HomeView from '../pages/HomeView.vue'
import LoginView from "../pages/LoginView.vue"
import MatchView from '../pages/MatchView.vue'
import NewsListView from '../pages/NewsListView.vue'
import NewsPageView from '../pages/NewsPageView.vue'

console.log(import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    //history: createWebHistory(import.meta.env.PROD ? '/cybersportscore/' : '/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/match',
            name: 'match',
            component: MatchView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/news',
            name: 'news',
            component: NewsListView
        },
        {
            path: '/newspage',
            name: 'newspage',
            component: NewsPageView
        }
    ]
})

export default router