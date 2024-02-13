import '@/assets/global.scss'

import { appConfig } from '@/common/appConfig'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

console.log(`${appConfig.siteTitle} ${appConfig.versionCode}`)
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(router)

app.mount('#app')
