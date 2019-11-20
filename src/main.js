// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ViewHtml from './ViewHtml'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/email-template-builder',  component: App },
    { path: '/email-template-builder/view-html',  component: ViewHtml } 
  ]
})

new Vue({
  el: '#app',
  router
})