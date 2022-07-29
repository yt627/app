<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 设置footer显示和隐藏 -->
    <!-- <Footer v-show="$route.path==='/home' || $route.path==='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    export default {
    name: 'App',
    components:{Header,Footer}
    }
</script>

<style>

</style>
