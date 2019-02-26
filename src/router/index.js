import Vue from 'vue'
import Router from 'vue-router'
import router1 from "./router1"
import router2 from "./router2"

Vue.use(Router)

//添加登录验证属性
router2.forEach(item => {
	item.meta.Auth = true
})

let routes = new Set([...router1, ...router2])

export default new Router({
    routes: routes
})
