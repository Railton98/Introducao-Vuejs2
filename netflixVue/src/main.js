import Vue from 'vue'
// import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home.vue'

const Contato = {
  template: '<p>Página de Contato</p>'
}

const NoPage = {
  template: '<p>This Page Not Found!</p>'
}

// const routes = {
//   '/': Home,
//   '/contato': Contato
// }

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   data: {
//     actualRoute: window.location.pathname
//   },
//   computed: {
//     exibeComponent () {
//       return routes[this.actualRoute] || NoPage
//     }
//   },
//   // render: h => h(App)
//   render (h) { return h(this.exibeComponent)}
// })
