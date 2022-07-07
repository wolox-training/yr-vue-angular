import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './scss/application.scss';
import { createPinia } from 'pinia';
import i18n from './config/i18n';

const pinia = createPinia();

createApp(App).use(i18n).use(router).use(pinia).mount('#app');
