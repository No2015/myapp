//必须登录才展示的路由 Auth: true
export default [
    {
        path: '/brick',
        name: 'Brick',
        component: resolve => require(['@/components/Brick'],resolve),
        meta: {
            title: '量化搬砖',
        }
    },
    {
        path: '/user',
        name: 'User',
        component: resolve => require(['@/components/User'],resolve),
        meta: {
            title: '个人中心',
        }
    },
    {
        path: '/assets',
        name: 'Assets',
        component: resolve => require(['@/components/Assets'],resolve),
        meta: {
            title: '我的资产',
            keepAlive: true
        }
    },
    {
        path: '/otc',
        name: 'Otc',
        component: resolve => require(['@/components/Otc'],resolve),
        meta: {
            title: 'OTC',
        }
    },
    {
        path: '/psbt',
        name: 'Psbt',
        component: resolve => require(['@/components/psbt/Index'],resolve),
        meta: {
            title: 'PSBT',
        }
    },
    {
        path: '/psbt/in',
        name: 'PsbtIn',
        component: resolve => require(['@/components/psbt/In'],resolve),
        meta: {
            title: 'PSBT转入',
            hideFooter: true,
        }
    },
    {
        path: '/psbt/out',
        name: 'PsbtOut',
        component: resolve => require(['@/components/psbt/Out'],resolve),
        meta: {
            title: 'PSBT转出',
            hideFooter: true,
        }
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: resolve => require(['@/components/Forgot'],resolve),
        meta: {
            title: '找回密码',
            hideHeader: true,
            hideFooter: true
        }
    },
]