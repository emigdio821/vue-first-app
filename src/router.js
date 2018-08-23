import Vue from 'vue'
import Router from 'vue-router'
import FirstApp from './components/FirstApp.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstApp',
      component: FirstApp
    }, {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
