import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from './router';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
import('@/style/main.scss')
const app = createApp(App);
const store = createPinia();
app.use(vuetify).use(store).use(router).mount('#app')
