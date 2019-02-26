<template>
    <div class="content content2 content3 header-bg bgfff">
    	<div class="pad440">
            <p class="padt2 padb4 font62 tc bjs-color-white">找回密码</p>
            <div class="pad440 tc" v-if="!inputState">
                <span @click="chackType(1)" v-bind:class="type == 1 ? 'bjs-color-blue bjs-btn font5' : 'bjs-btn font5'">手机找回</span>
                <span @click="chackType(2)" v-bind:class="type == 2 ? 'bjs-color-blue bjs-btn font5' : 'bjs-btn font5'">邮箱找回</span>
            </div>
            <ul class="pad440" v-if="!inputState">
                <LiInput v-if="type == 1" title="手机号" id="phone" placeholder="请输入手机号" type="phone" :value.sync="phone" />
                <LiInput v-if="type == 2" title="邮箱" id="email" placeholder="请输入邮箱" type="email" :value.sync="email" />
                <LiInputImg title="图形验证码" id="verify" placeholder="请输入图形验证码" type="number" :value.sync="verify" />
                <LiInputCode v-if="type == 1" title="短信验证码" id="verifyCode" placeholder="请输入短信验证码" type="number" :refValue="verify" refId="verify" :value.sync="verifyCode" />
                <LiInputCode v-if="type == 2" title="邮件验证码" id="verifyCode" placeholder="请输入邮件验证码" type="number" :refValue="verify" refId="verify" :value.sync="verifyCode" />
                <li class="form-item padb4 padt4">
                    <p class="padt4"></p>
                    <span class="bjs-btn bjs-btn-full bjs-btn-blue lh175 font5" @click="confirm()">确认</span>
                </li>
            </ul>
            <ul class="pad440" v-if="inputState">
                <li class="form-item padb2 padt4">
                    <h5 class="form-label font5 padb2">新密码</h5>
                    <input type="password" name="" id="password" class="form-input" placeholder="请输入新密码" v-model="password" />
                </li>
                <li class="form-item padb4 padt4">
                    <p class="padt4"></p>
                    <span class="bjs-btn bjs-btn-full bjs-btn-blue lh175 font5" @click="submit()">提交</span>
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
    name: 'Forgot',
    data () {
        return {
            phone: '',
            email: '',
            password: '',
            type: 1,
            verify: '',
            submitState: false,
            verifyCode: '',
            ajaxState: false,
            inputState: false
        }
    },
    components: {
        LiInput,
        LiInputImg,
        LiInputCode
    },
    methods: {
        confirm: function(){
            var that = this;
            if(that.phone == '' && that.type == 1){
                //that.$layer.tips('请输入手机号','#phone',{tips: 0});
                return false;
            }
            if(that.email == '' && that.type == 2){
                //that.$layer.tips('请输入邮箱','#email',{tips: 0});
                return false;
            }
            if(that.verify == ''){
                //that.$layer.tips('请输入图形验证码','#verify',{tips: 0});
                return false;
            }
            if(that.verifyCode == ''){
                //that.$layer.tips('请输入验证码','#verifyCode',{tips: 0});
                return false;
            }
            that.inputState = true;
        },
        submit: function(){
            let that = this;
            if(that.submitState){
                return false;
            }
            var data = {
                phone: that.phone,
                email: that.email,
                type: that.type,
                password: that.password,
                verify: that.verify,
                verifyCode: that.verifyCode
            };
            if(data.password == ''){
                //that.$layer.tips('请输入新密码','#password',{tips: 0});
                return false;
            }
            console.log(data);
            that.submitState = true;
            //that.$layer.loading();
            that.ajaxState = setTimeout(function(){
                //that.$layer.closeAll('loading');
                //that.$layer.msg('修改成功,请登录',{icon: 1},function(){
                    that.$layer.closeAll();
                    that.$router.push('/login');
                //});
            },3000);
        },
        chackType: function(type){
            this.type = type;
        }
    },
    beforeRouteLeave(to,from,next){
        if(this.ajaxState){
            clearTimeout(this.ajaxState);
        }
        //this.$layer.closeAll();//这里写关闭弹窗
        // 这里跳转路由
        next() // next（）别漏，不然不跳转
    }
}
</script>
