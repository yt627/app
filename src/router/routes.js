// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail'
import AddCartSucess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
export default [
    {
        name:"trade",
        path:"/trade",
        component:Trade,
        meta:{show:true}
    },
    {
        name:"shopcart",
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true}
    },
    {
        name:"addcartsucess",
        path:"/addcartsucess",
        component:AddCartSucess,
        meta:{show:true}
    },
    {
        name:'detail',
        path:"/detail/:skuId",
        component:Detail,
        meta:{show:true}
    },
    {
        name:'home',
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        name:'register',
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    {
        name:'login',
        path:"/login",
        component:Login,
        meta:{show:false}
    },
    {
        name:'search',
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
    },
    {
        // 重定向
        path:"/",
        redirect:"/home"
    }
]