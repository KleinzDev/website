import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Links from './views/Links.vue'
import PageNotFound from './views/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: Home },
	{ path: '/about-me', component: About },
	{ path: '/links', component: Links },
	{ path: '/:pathMatch(.*)*', component: PageNotFound }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')