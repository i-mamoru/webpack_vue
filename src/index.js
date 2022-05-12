import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('./views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component:() => import('./views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let app = createApp(App);
app
  .use(router)
  .mount('#app');