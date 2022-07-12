import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia.use(createPersistedStatePlugin()))
app.use(router)

app.mount('#app')