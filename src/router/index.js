import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import ListOfArticles from '../views/ListOfArticles.vue'
import NotFound from '../views/errors/404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-of-articles',
    name: 'ListOfArticles',
    component: ListOfArticles
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  {
    // 404
    path: '*',
    name: 'not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
