import Vue from 'vue'
import Router from 'vue-router'
import IfAndFor from '@/components/IfAndFor'
import Hello from '@/components/Hello'
import UnitConversion from '@/components/UnitConversion'
import Form from '@/components/Form'
import Blogs from '@/components/BlogList'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ifAndFor',
      name: 'IfAndFor',
      component: IfAndFor
    },
    {
      path: '/unitConversion',
      name: 'UnitConversion',
      component: UnitConversion
    }
    ,
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
