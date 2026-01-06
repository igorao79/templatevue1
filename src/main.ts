import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
// import 'vuetify/styles' // Временно убрал
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import GiftCards from './views/GiftCards.vue'
import About from './views/About.vue'
import './style.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#00887A',      // Основной зеленый
          secondary: '#FFCCBC',    // Розовато-оранжевый
          surface: '#FFFFFF',      // Белый
          accent: '#D3E3FC',       // Голубой
          info: '#77A6F7',         // Синий
          background: '#FFFFFF',
          error: '#d32f2f',
          warning: '#f57c00',
          success: '#388e3c',
        }
      }
    }
  },
})

const pinia = createPinia()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/menu', name: 'Menu', component: Menu },
    { path: '/gift-cards', name: 'GiftCards', component: GiftCards },
    { path: '/about', name: 'About', component: About },
  ],
})

const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
