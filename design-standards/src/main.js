import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./main.css";
// import VueI18n from 'vue-i18n';
import VueGoogleCharts from 'vue-google-charts';
import En from './translate/en.json';
import Ar from './translate/ar.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'en',
    messages: {
      en: En,
      ar: Ar
    }
  });
  

createApp(App).use(store).use(i18n).use(router).use(VueGoogleCharts).mount('#app');
