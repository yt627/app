// 当前这个模块，API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';

// 三级联动的接口
// api/product/getBaseCategoryList    get  无参数

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

// 获取banners数据
export const reqGetBanners = ()=>mockRequests({url:'/banners',method:'get'});

// 获取floors数据
export const reqGetFloors = ()=>mockRequests.get('/floors');

// 获取搜索模块数据 地址：/api/list   请求方式：post   参数
// params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

// 获取产品详细信息接口
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})