import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase/app';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import './assets/scss/app.scss';
import firebaseConfig from './config/firebase.js';

Vue.use(Buefy);

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
