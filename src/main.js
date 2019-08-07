import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NewsHolder from "./components/NewsHolder";
import LinksHolder from "./components/LinksHolder";
import AddsHolder from "./components/AddsHolder";
import Noticia from './components/Noticia.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      { path: '/', component: App },
      { path: '/noticia/:id', name: 'noticia', component: Noticia }
    ]
})

new Vue({
   render: h => h(App),
   router
}).$mount('#app')
