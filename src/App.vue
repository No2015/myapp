<template>
    <div class="wrap">
    	<Header v-if="!$route.meta.hideHeader"></Header>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        <Footer v-if="!$route.meta.hideFooter"></Footer>
    </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
    name: 'App',
    components:{
        Header: Header,
        Footer: Footer
    },
    data () {
        return {
            showHeader: true,
            showFooter: true
        }
    }
}
</script>
