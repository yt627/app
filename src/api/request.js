// 对axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress'
// done方法    start方法

// 
import store from '@/store';

// 引入进度条样式
import 'nprogress/nprogress.css'
// create方法创建axios实例
// requests就是axios,只不过稍微配置下
let requests = axios.create({
    // 配置对象
    // 基础路径，发送请求时，路径中会出现api
    baseURL:'/api',
    timeout:5000,
});

// 请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事
requests.interceptors.request.use((config)=>{
    // 向请求头添加字段   userTempId
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    // 需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    // config:配置对象，对象里面有一个属性很重要，headers请求头
    // 进度条开始
    nprogress.start();
    return config;
});


// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 响应成功的回调，服务器响应的数据回来之后，响应拦截器可以响应到，做一些事情
    // 进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    // 响应失败的回调
    return Promise.reject(new Error('faile'))
})


export default requests