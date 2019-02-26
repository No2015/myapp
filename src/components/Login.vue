<template>
    <div class="content content2 content3 bgfff">
        <router-link class="db" to="/"><img class="w100" src="/static/images/login.jpg"></router-link>
    	<div class="pad440">
            <ul class="pad440">
                <LiInput title="账号" id="name" placeholder="请输入账号/手机/uid" type="text" :value.sync="name" />
                <LiInput title="密码" id="password" placeholder="请输入登录密码" type="password" :value.sync="password" />
                <LiInputImg title="图形验证码" id="verify" placeholder="请输入图形验证码" type="number" :value.sync="verify" />
                <li class="form-item padb4 padt4">
                    <p class="padt4"></p>
                    <span :class="(submitState?'loading-btn ':'')+'bjs-btn bjs-btn-full bjs-btn-blue lh175'" @click="submit()">登录</span>
                    <p class="clearfix lh15 padt2 font42">
                        <router-link class="pull-left" to="/forgot">忘记密码</router-link>
                        <router-link class="pull-right" to="/register">注册账号</router-link>
                    </p>
                </li>
            </ul>
        </div> 		
    </div>
</template>

<script>
import LiInput from './form/LiInput.vue'
import LiInputImg from './form/LiInputImg.vue'
export default {
    name: 'Login',
    components: {
        LiInput,
        LiInputImg,
    },
    data () {
        return {
            name: '',
            password: '',
            verify: '',
            submitState: false
        }
    },
    methods: {
        submit () {
            let that = this;
            if(that.submitState){
                return false;
            }
            var data = {
                name: this.name,
                password: this.password,
                verify: this.verify
            };
            if(data.name == ''){
                that.$layer.toast('请输入账号');
                return false;
            }
            if(data.password == ''){
                that.$layer.toast('请输入密码');
                return false;
            }
            if(data.verify == ''){
                that.$layer.toast('请输入图形验证码');
                return false;
            }
            that.submitState = true;
            //let layero = that.$layer.open({type:2});
            setTimeout(() => {
                that.$layer.toast('密码错误');
                that.submitState = false;
                //console.log(data);
                //that.$layer.closeAll('loading');
                //that.$layer.msg('登录成功',{icon: 1},() => {
                    //that.$layer.close(layero);
                    /*sessionStorage.setItem('loginStatus',true);
                    that.$store.state.loginStatus = sessionStorage.getItem('loginStatus');
                    if(that.$route.query.path){
                        that.$router.replace({ name: that.$route.query.path });
                    }else{
                        that.$router.replace({ name: 'Index' });
                    }*/                    
                //});
            },1000);
        }
    },
    beforeRouteLeave(to,from,next){
        //this.$layer.closeAll();//这里写关闭弹窗
        // 这里跳转路由
        next() // next（）别漏，不然不跳转
    }
}
</script>
