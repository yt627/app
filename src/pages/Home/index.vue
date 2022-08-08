<template>
    <div>
        <!-- 三级联动 全局组件 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    import ListContainer from '@/pages/Home/ListContainer'
    import Recommend from '@/pages/Home/Recommend'
    import Rank from '@/pages/Home/Rank'
    import Like from '@/pages/Home/Like'
    import Floor from '@/pages/Home/Floor'
    import Brand from '@/pages/Home/Brand'

    import {mapState} from 'vuex';
    export default {
        name:'',
        components:{
            ListContainer,
            Recommend,
            Rank,
            Like,
            Floor,
            Brand
        },
        computed:{
            ...mapState({
                floorList:state=>state.home.floorList               
            }
            )
        },
        methods:{
        },
        async mounted(){
            // 派发actions，获取floors组件数据
            this.$store.dispatch('getFloorList');
        }
    }
</script>

<style>

</style>