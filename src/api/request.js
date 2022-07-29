// 对axios进行二次封装
import axios from 'axios';
import { config } from 'vue/types/umd';

// create方法创建axios实例
// requests就是axios,只不过稍微配置下
const requests = axios.create({
    // 配置对象
    // 基础路径，发送请求时，路径中会出现api
    baseURL:'/api',
    timeout:5000,
});

// 请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事
requests.interceptors.request.use((config)=>{
    return config;
});


// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 响应成功的回调，服务器响应的数据回来之后，响应拦截器可以响应到，做一些事情
    return res.data;
},(error)=>{
    // 响应失败的回调
    return Promise.reject(new Error('faile'))
})


export default axios