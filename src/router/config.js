/*
** 路由配置
*/
import List from '../views/List'
import Word from '../views/Word'
import Login from '../views/Login'
import Page from '../views/Page'

const routers = [
    {
        mame:'首页',
        path:'/',
        exact:true,
        component: Page
    },{
        mame:'登录',
        path:'/login',
        exact:false,
        component: Login
    },{
        mame:'管理系统',
        path:'/page',
        exact:true,
        component: Page,
        child:[
            {
                mame:'客户管理',
                path:'/customer',
                exact:true,
                component: List
            },
            //订单管理
            {
                mame:'大订单',
                path:'/order/list',
                exact:true,
                component: List
            },{
                mame:'小订单',
                path:'/order/word',
                exact:true,
                component: Word
            },
            //商家管理
            {
                mame:'大订单',
                path:'/partner/list',
                exact:true,
                component: List
            },{
                mame:'小订单',
                path:'/partner/word',
                exact:true,
                component: Word
            },
            //系统设置
            {
                mame:'数据字典',
                path:'/sys/list',
                exact:true,
                component: List
            },{
                mame:'菜单管理',
                path:'/sys/word',
                exact:true,
                component: Word
            },{
                mame:'角色管理',
                path:'/sys/roll',
                exact:true,
                component: List
            },{
                mame:'员工管理',
                path:'/sys/peo',
                exact:true,
                component: () => import('../views/Login')
            }
        ]
    }
]

export default routers