import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../src/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
