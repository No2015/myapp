//不设置权限的路由
export default [
    {
        path: '/',
        name: 'Index',
        component: resolve => require(['@/components/Index'],resolve),
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: resolve => require(['@/components/Login'],resolve),
        meta: {
            title: '登录',
            hideHeader: true,
            hideFooter: true
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: resolve => require(['@/components/Product'],resolve),
        meta: {
            title: '商品',
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: resolve => require(['@/components/Register'],resolve),
        meta: {
            title: '注册',
            hideHeader: true,
            hideFooter: true
        }
    },
    {
        path: '/detail',
        name: 'ProductDetail',
        component: resolve => require(['@/components/ProductDetail'],resolve),
        meta: {
            title: '商品详情',
        }
    },
    {
        path: '/cate',
        name: 'Cate',
        component: resolve => require(['@/components/category/Index'],resolve),
        meta: {
            title: '分类',
        }
    },
    {
        path: '*',
        name: 'Index',
        component: resolve => require(['@/components/Index'],resolve),
        meta: {
            title: '首页',
        }
    },
]

