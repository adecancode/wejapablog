import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id/',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
