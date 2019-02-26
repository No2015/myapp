import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	homeSlideIndex: 0,
	loginStatus: sessionStorage.getItem('loginStatus')
	/*showFooter: true,
	showHeader: true*/
};

export default new Vuex.Store({
	state
})