import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ComponA from '@/components/ComponA'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('ComponA', ComponA)
console.log(Vue.options.components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
