import Vue from 'vue'
import App from './App.vue'

// 三级联动 全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false
// 引入路由
import router from '@/router';

new Vue({
  render: h => h(App),
  //   注册路由组件，KV写法省略V
  //   
  router
}).$mount('#app')
