// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueiInfinite from 'vue-infinite-scroll'


import Api from '@/api/api'
import Global from '@/global/global'
import Config from '@/global/config'


Vue.prototype.$Api = Api
Vue.prototype.$Global = Global
Vue.prototype.$Config = Config

Vue.use(layer)

Vue.use(VueAxios, axios)

Vue.use(vueiInfinite)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {	
	if (to.meta.Auth && !store.state.loginStatus) {
	    return next({ name: 'Login', query: {path: to.name}})
	}
	if (to.name == 'Login' && store.state.loginStatus){
		return next({ name: 'Index' })
	}
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
	
})


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
