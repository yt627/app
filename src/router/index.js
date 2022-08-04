// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
import routes from './routes.js'
// 先保存VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

// 重写push||replace
// location 往哪跳
// 
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call和apply区别
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
};

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

// 配置路由
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { x:0,y:0 }
      },
})