import { reqCartList, reqDeleteCartShop, reqUpdateCheckedById } from "@/api";
const state = {
    cartList:[]
};
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code == 200){
            commit('GETCARTLIST',result.data);
        }
    },
    async deleteCartShop({ commit }, skuId){
        let result = await reqDeleteCartShop(skuId);
        if(result.code == 200){
            return 'ok';  
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if(result.code == 200){
            return 'ok';  
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 删除全部选中的产品
    deleteAllCheckedCart({dispatch, getters}){
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCartShop',item.skuId):'';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    // 修改全部商品状态
    updateAllCartIsCHecked({dispatch,state},isChecked){
        let PromiseAll =[];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}