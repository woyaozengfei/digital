import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'pages/home-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HomePage',
      component: HomePage
    }
  ]
})