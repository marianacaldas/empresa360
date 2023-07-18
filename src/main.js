import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App)
Vue.use(router) //adc as confiogurações de rotas a instância do Vue
Vue.mount('#app')
