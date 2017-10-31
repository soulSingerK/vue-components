import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/demo/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/splitPage'
    },
    {
      path: '/splitPage',
      component: Demo
    }
  ]
})
