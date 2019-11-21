// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ViewHtml from './ViewHtml'
import VueResource from 'vue-resource';

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/mail-content/:id',  component: App },
    { path: '/mail-content-view-html',  component: ViewHtml } 
  ]
})

new Vue({
  el: '#app',
  router
})