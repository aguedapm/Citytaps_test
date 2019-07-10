import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Inspiration from './components/Inspiration.vue'
import Leaks from './components/Leaks.vue'
import LoginForm from './components/LoginForm.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home},
  { path: '/inspiration', component: Inspiration },
  { path: '/leaks', component: Leaks },
  { path: '/login', component: LoginForm}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
