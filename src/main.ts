import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)



const pinna = createPinia()


app.use(pinna)
app.use(router)
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
pinna.use(piniaPluginPersistedstate)
app.mount('#app')
