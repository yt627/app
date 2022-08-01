import { reqGetSearchInfo } from "@/api";
import { result } from "lodash";
const state = {
    searchList:{},
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params){
        // 当前这个reqGetSearchInfo这个函数在调用获取服务器数据时，至少传递一个参数（空对象）
        // params形参，是当前用户action的时候，第二个参数传递过来的，至少是空对象
        let result = await reqGetSearchInfo(params);
        if(result.code === 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
};
// 计算属性
// getters：简化数据而生，可以把将来在组件中所使用的数据简化一下【将来组件获取数据就方便了】
const getters = {
    // satate:形参，当前仓库中的state，并不是大仓库中的state
    goodsList(state){
        return state.searchList.goodsList || {};
    },
    attrsList(state){
        return state.searchList.attrsList || {};
    },
    trademarkList(state){
        return state.searchList.trademarkList || {};
    },
};


export default {
    state,
    mutations,
    actions,
    getters
}