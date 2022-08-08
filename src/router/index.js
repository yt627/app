// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
import routes from './routes'
// 引入store
import store from '@/store';
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

// 重写VueRouter.prototype身上的replace方法
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 对外暴露暴露VueRouter类的实例
let router = new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { x:0,y:0 }
      },
});

// 全局守卫 前置守卫（在路由跳转之前判断）
router.beforeEach(async (to, from, next)=>{
    // to:可以获取到想要跳转到哪一个路由信息
    // from:可以获取到哪个路由来的信息
    // next:放行的函数
    // next();
    // 用户登录了才会有token
    let token = store.state.user.token;
    // 用户的信息
    let name = store.state.user.userInfo.name;
    // 用户已经登录了
    if(token){
        // 用户登录了不能去login
        if(to.path=='/login'){
            next('/home');
        }else{
            // 登录了不去login
            // 如果用户名已有
            if(name){
                next();
            }else{
                // 没有用户信息，派发actions，让仓库存储用户信息再跳转
                try {
                    // 获取用户信息成功
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // token失效了获取不到用户信息，重新登录
                    // 清除token
                    store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    }else{
        // 未登录
        next();
    }
});


export default router;