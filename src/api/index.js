// 当前这个模块，API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';
import { method } from 'lodash';

// 三级联动的接口
// api/product/getBaseCategoryList    get  无参数

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

// 获取banners数据
export const reqGetBanners = ()=>mockRequests({url:'/banners',method:'get'});

// 获取floors数据
export const reqGetFloors = ()=>mockRequests.get('/floors');

// 获取搜索模块数据 地址：/api/list   请求方式：post   参数
// params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params});

// 获取产品详细信息接口
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});

// 将购物车的交给服务器
export const reqAddOrUpdateShopCar = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'});

// 删除购物车商品
export const reqDeleteCartShop = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

// 修改商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

// 获取验证码
export const reqGetCode = (phone) =>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

// 注册
export const reqUserRegister = (data)=>requests({url:'user/passport/register',data,method:'post'});

// 登录
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});

// 获取用户信息 需要携带用户信息（token）向服务器请求用户信息
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

// 退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'});

// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

// 获取商品清单
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

// 提交订单的接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

// 获取支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

// 获取支付订单状态
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

// 获取我的订单列表
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});