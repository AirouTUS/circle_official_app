import Vue from 'vue'
import VueRouter from 'vue-router'

import Init from '../views/Init'
import Index from '../views/Index'
import Article from '../views/Article'
import Portfolio from '../views/Portfolio'
import Home from '../views/Home'
import Recruit from '../views/Recruit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Init,
    children: [
      {
        path: '',
        component: Index,
        children: [
          {
            path: '',
            component: Home
          },{
            path: 'article',
            component: Article
          },{
            path: 'portfolio',
            component: Portfolio
          },{
            path: 'recruit',
            component: Recruit
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
