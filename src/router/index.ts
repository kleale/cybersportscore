import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../pages/HomeView.vue'
import LoginViewVue from "../pages/LoginView.vue";
import MatchView from '../pages/MatchView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //history: createWebHistory(import.meta.env.PROD ? '/cybersportscore/' : '/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/match/:match_id',
            name: 'match',
            component: MatchView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginViewVue
        }
    ]
})

export default router