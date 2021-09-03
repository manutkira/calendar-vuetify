import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutoSize from 'vue-textarea-autosize'
import firebase from '@firebase/app'
import '@firebase/firestore'

Vue.use(VueTextareaAutoSize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyATGqAix0HAJTOlyiK_VZymNah4DXAkv7g",
  authDomain: "calendar-vuetify-a5f56.firebaseapp.com",
  projectId: "calendar-vuetify-a5f56",
  storageBucket: "calendar-vuetify-a5f56.appspot.com",
  messagingSenderId: "973548881380",
  appId: "1:973548881380:web:7d0c76e2f6cf451a5eb3f1"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
