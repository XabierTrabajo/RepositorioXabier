import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
const Pinia = createPinia();
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(Pinia).use(store).mount('#app');
//const app = createApp(App)
/*
Pinia.use(App)
Pinia.use(router)
Pinia.use(Pinia)
Pinia.use(store)
Pinia.mount('#app')
*/