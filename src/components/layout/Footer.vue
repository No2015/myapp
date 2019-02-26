<template>
    <div class="footer">
        <div class="footer-content">
            <ul class="flex-box tc font42 lh15">
                <li v-for="(menu,index) in menus" :key="index">
                    <router-link v-bind:class="menu.name == $route.name ? ('active bjs-color-blue '+menu.className) : menu.className"  v-bind:to="menu.link" :key="index" :title="menu.name">{{ menu.txt }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    data () {
        let login = this.$store.state.loginStatus;
        let that = this;
        return {
            login: login,
            menus: login ? that.$Config.menus.login : that.$Config.menus.nologin
        }
    }
}
</script>
