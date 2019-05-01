import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/header'
import Footer from './components/footer'
import Index from './views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path:'/header',component:Header},
    {path:'/footer',component:Footer},
    {path:'/index',component:Index}
  ]
})
