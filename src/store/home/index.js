import { reqCategoryList, reqGetBanners, reqGetFloors } from "@/api";
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
        // console.log(state);
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
        // console.log(state);
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    },
};
const actions = {
    async categoryList({commit}){     // async  await 写法
        let result = await reqCategoryList();
        if(result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBanners();
        // console.log(result)
        if(result.code === 200){
            commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloors();
        // console.log(result)
        if(result.code === 200){
            commit('GETFLOORLIST',result.data)
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