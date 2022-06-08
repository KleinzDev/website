import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', name: "Home", component: () => import('./pages/Home.vue') },
	{ path: '/about', name: "About", component: () => import('./pages/About.vue') },
	{ path: '/:pathMatch(.*)*', name: "PageNotFound", component: () => import('./pages/PageNotFound.vue') }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')