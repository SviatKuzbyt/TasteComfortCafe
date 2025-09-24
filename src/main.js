import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import uiComponents from '@/components/ui'
import './assets/global.css'

const app = createApp(App)

app.use(router)
uiComponents.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')