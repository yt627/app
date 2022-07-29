import { reqCategoryList } from "@/api";
const state = {
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
        console.log(state);
    }
};
const actions = {
    async categoryList({commit}){     // async  await 写法
        let result = await reqCategoryList();
        if(result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    }
    //#region 
    // categoryList({commit}){    // Promise.then原始写法
    //     reqCategoryList().then(value=>{
    //         if(value.code === 200){
    //             commit('CATEGORYLIST',value.data);
    //         }
    //     })
    // }
    //#endregion
};
const getters = {};


export default {
    state,
    mutations,
    actions,
    getters
}