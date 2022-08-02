import Vue from 'vue'
import App from './App.vue'

// 定义 全局组件
import TypeNav from '@/components/TypeNav'

import Pagination from '@/components/Pagination'

// 全局组件 第一个参数:组件名  第二个参数:那个组件
// TypeNav组件
Vue.component(TypeNav.name,TypeNav)
// 分页器组件
Vue.component(Pagination.name,Pagination)

// 关闭生产提示
Vue.config.productionTip = false
// 引入路由
import router from '@/router';
// 引入仓库
import store from './store';

import {reqCategoryList} from '@/api/index';

// 引入mockServe.js    mock数据
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css';

// 测试
reqCategoryList();

new Vue({
  render: h => h(App),
  //   全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  //   注册路由组件，KV写法省略V
  //   
  router,
  //   注册仓库
  store
}).$mount('#app')
