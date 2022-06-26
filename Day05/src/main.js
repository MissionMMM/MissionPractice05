import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入axios: 原理是把axios混入到vue实例对象里
import axios from 'axios'
// 简单粗暴: 直接存到vue的原型里, 使用时没有提示
// Vue.prototype.axios = axios

// 使用 vue-axios 模块, 可以优雅的把 axios 注入到vue里
import VueAxios from 'vue-axios';
// use:使用;   vue提供的专门加载第三方模块的方法
Vue.use(VueAxios, axios) //参数顺序固定

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
