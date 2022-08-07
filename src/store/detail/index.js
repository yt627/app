import { reqGoodsInfo, reqAddOrUpdateShopCar } from "@/api" ;
import {get_UUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    uuid_token:get_UUID()
};
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    async getGoodInfo({commit}, skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCar({commmit}, {skuId,skuNum}){
        let result = await reqAddOrUpdateShopCar(skuId,skuNum);
        // 只是将数据给服务器，服务器并没有返回数据，不需要存储数据
        if(result.code == 200){
            return "OK"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
};
// 简化数据 
const getters = {
    // 简化路径导航的数据
    categoryView(state){
        // 比如：state.goodInfo初始状态为空，空对象的categoryView属性值undefined
        // 当前计算出的属性值至少为一个空对象
        return state.goodInfo.categoryView || {}
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    // 简化售卖属性的信息
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}