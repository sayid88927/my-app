import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import router from './router';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios



Vue.config.productionTip = false

new Vue({
  vuetify,
    router,
  render: h => h(App)
}).$mount('#app')
