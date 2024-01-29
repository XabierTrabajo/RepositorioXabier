/*import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
const Pinia = createPinia();
import App from './App.vue'
//import store from './store'
import router from './router'

createApp(App).use(router).use(Pinia).mount('#app');*/
//const app = createApp(App)
/*
Pinia.use(App)
Pinia.use(router)
Pinia.use(Pinia)
Pinia.use(store)
Pinia.mount('#app')
*/

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')