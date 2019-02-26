<template>
    <div class="content content2 content3 header-bg bgfff">
    	<div class="pad440">
            <p class="padt2 padb4 font62 tc bjs-color-white">注册</p>
            <div class="pad440 tc">
                <span @click="chackType(1)" v-bind:class="type == 1 ? 'bjs-color-blue bjs-btn font5' : 'bjs-btn font5'">手机注册</span>
                <span @click="chackType(2)" v-bind:class="type == 2 ? 'bjs-color-blue bjs-btn font5' : 'bjs-btn font5'">邮箱注册</span>
            </div>
            <ul class="pad440">
                <LiInput v-if="type == 1" title="手机号" id="phone" placeholder="请输入手机号" type="phone" :value.sync="phone" />
                <LiInput v-if="type == 2" title="邮箱" id="email" placeholder="请输入邮箱" type="email" :value.sync="email" />
                <LiInput title="密码" id="password" placeholder="请输入密码" type="password" :value.sync="password" />
                <LiInput title="确认密码" id="new_password" placeholder="请确认密码" type="password" :value.sync="new_password" />
                <LiInputImg title="图形验证码" id="verify" placeholder="请输入图形验证码" type="number" :value.sync="verify" />
                <LiInputCode v-if="type == 1" title="短信验证码" id="verifyCode" placeholder="请输入短信验证码" type="number" :refValue="verify" refId="verify" :value.sync="verifyCode" />
                <LiInputCode v-if="type == 2" title="邮件验证码" id="verifyCode" placeholder="请输入邮件验证码" type="number" :refValue="verify" refId="verify" :value.sync="verifyCode" />
                <li class="form-item padb4 padt4">
                    <p class="padt4"></p>
                    <span class="bjs-btn bjs-btn-full bjs-btn-blue lh175 font5" @click="submit()">确认</span>
                </li>
            </ul>
        </div> 		
    </div>
</template>

<script>
import LiInput from './form/LiInput.vue'
import LiInputImg from './form/LiInputImg.vue'
import LiInputCode from './form/LiInputCode.vue'
export default {
    name: 'Register',
    data () {
        return {
            phone: '',
            email: '',
            password: '',
            new_password: '',
            verify: '',
            verifyCode: '',
            type: 1,
            submitState: false,
        }
    },
    components: {
        LiInput,
        LiInputImg,
        LiInputCode
    },
    methods: {
        submit (){
            let that = this;
            if(that.submitState){
                return false;
            }
            if(that.phone == '' && that.type == 1){
                //that.$layer.tips('请输入手机号','#phone',{tips: 0});
                return false;
            }
            if(that.email == '' && that.type == 2){
                //that.$layer.tips('请输入邮箱','#email',{tips: 0});
                return false;
            }
            if(that.password == ''){
                //that.$layer.tips('请输入密码','#password',{tips: 0});
                return false;
            }
            if(that.new_password == ''){
                //that.$layer.tips('请确认密码','#new_password',{tips: 0});
                return false;
            }
            if(that.new_password !== that.password){
                //that.$layer.tips('两次输入密码不相同','#new_password',{tips: 0});
                return false;
            }
            if(that.verifyCode == ''){
                //that.$layer.tips('请确认验证码','#verifyCode',{tips: 0});
                return false;
            }
            var data = {
                phone: that.phone,
                email: that.email,
                type: that.type,
                password: that.password,
                verify: that.verify,
                verifyCode: that.verifyCode,
            };
            that.submitState = true;
            //that.$layer.loading();
            setTimeout(() => {
                //that.$layer.closeAll('loading');
                console.log(data);
                //that.$layer.msg('注册成功,请登录',{icon: 1},() => {
                    //that.$layer.closeAll();
                    that.$router.push('/login');
                //});
            },1000);
        },
        chackType (type){
            this.type = type;
        }
    },
    beforeRouteLeave(to,from,next){
        //this.$layer.closeAll();//这里写关闭弹窗
        // 这里跳转路由
        next() // next（）别漏，不然不跳转
    }
}
</script>
