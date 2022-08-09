import Vue from 'vue'
import App from './App.vue'

// 定义 全局组件
// 三级联动
import TypeNav from '@/components/TypeNav'
// 分页器
import Pagination from '@/components/Pagination'

// 按需引入elementUI
import { Button, MessageBox } from 'element-ui';

// 注册组件
// 全局组件 第一个参数:组件名  第二个参数:那个组件
// TypeNav组件
Vue.component(TypeNav.name,TypeNav)
// 分页器组件
Vue.component(Pagination.name,Pagination)
// 注册elementUi组件button  第一种写法
Vue.component(Button.name, Button);
// 注册MessageBox组件 第二种写法  挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 关闭生产提示
Vue.config.productionTip = false

// 引入路由
import router from '@/router';
// 引入仓库
import store from './store';
// 引入mockServe.js    mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css';

// 统一接口api文件夹里全部请求函数
// 统一引入
import * as API from '@/api'
import tyn from '@/assets/1.gif'

// 引入插件   lazyload   1.3.3版本
import VueLazyload from 'vue-lazyload';
// 注册插件
Vue.use(VueLazyload,{
    // 懒加载默认图片
    loading:tyn
});
// 引入校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  beforeCreate(){
    //   全局事件总线bus配置
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;

  },
  //   注册路由组件，KV写法省略V
  //   
  router,
  //   注册仓库
  store
}).$mount('#app')
