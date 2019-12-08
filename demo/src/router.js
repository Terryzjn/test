import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './view/index/index.vue'
import problem from './view/problem/problem.vue'
import contact from './view/contact/contact.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/contact',
        component: contact
    },
    {
        path: '/problem',
        component: problem
    },

]
const router = new VueRouter({
    routes
})
export default router