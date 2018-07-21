import Vue from 'vue'
import Router from 'vue-router'

import Home from './../views/home/Index2.vue' 
import Plaza from './../views/plaza/Index.vue' 
import Add from './../views/add/Index.vue' 
import Chat from './../views/chat/Index.vue' 
import Mine from './../views/mine/Index.vue' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/plaza',
      name: 'plaza',
      component: Plaza
    },
    { 
      path:'/add',
      name:'add',
      component:Add
    },
    { 
      path:'/chat',
      name:'chat',
      component:Chat
    },
    { 
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'**',
      redirect:'/home'
    }



  ]
})
