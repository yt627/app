// 引入路由组件一级路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSucess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
// 引入二级路由组件
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

// 路由配置信息
export default [
    {
        path:"/center",
        component:Center,
        meta:{show:true},
        // 耳机路由组件配置
        children:[
            {
                path:'myorder',
                component:myOrder,
            },
            {
                path:'grouporder',
                component:groupOrder,
            },
            // 重定向
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:"/paysuccess",
        component:PaySuccess,
        meta:{show:true}
    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path == '/trade'){
                next();
            }else{
                next(false)
            }
        }
    },
    {
        name:"trade",
        path:"/trade",
        component:Trade,
        meta:{show:true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            // 去交易页面，必须从购物车而来
            if(from.path == "/shopcart"){    // 有bug  1.从首页点购物车进去再结算进不去trade 2.在trade中刷新出问题
                next(); 
            }else{
                // console.log(from.path);
                // 其他的路由组件而来，停留当前
                next(false);
            }
        }
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