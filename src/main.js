import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import firebase from 'firebase'

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);
const config = {
  apiKey: "AIzaSyDvz1zxb7lH7lj-isosotRYfXIIUVqgyYU",
  authDomain: "citrus-8dae9.firebaseapp.com",
  databaseURL: "https://citrus-8dae9.firebaseio.com",
  projectId: "citrus-8dae9",
  storageBucket: "citrus-8dae9.appspot.com",
  messagingSenderId: "877651258694"
}
firebase.initializeApp(config);

new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App }
});
