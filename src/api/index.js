// 当前这个模块，API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';

// 三级联动的接口
// api/product/getBaseCategoryList    get  无参数

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBanners = ()=>mockRequests({url:'/banners',method:'get'});

export const reqGetFloors = ()=>mockRequests.get('/floors');