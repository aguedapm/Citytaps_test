import Vue from "vue"
import Router from "vue-router"


import Home from '../components/Home.vue'
import Inspiration from '../components/Inspiration.vue'
import Leaks from '../components/Leaks.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/inspiration', component: Inspiration },
        { path: '/leaks', component: Leaks },
    ],
    mode: 'history'
})