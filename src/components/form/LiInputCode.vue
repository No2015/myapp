<template>
    <li class="form-item padb2 padt4">
        <h5 class="form-label font5 padb2">{{ title }}</h5>
        <ul class="flex-box">
            <li class="flex-item-5">
            	<input :type="type" :value="value" :id="id" class="form-input" :placeholder="placeholder" @input="$emit('update:value',$event.target.value)" />
            </li>
            <li class="flex-item-2 tr">
                <span class="form-input dblb tc font42" id="verifyBtn" style="width: 90%;" @click="send()">{{ sendTxt }}</span>
            </li>
        </ul>
    </li>  
</template>

<script>
export default {
    name: 'LiInputCode',
    props: ['title','type','id','placeholder','value','refId','refValue'],
    data () {
        return {
            sendTxt: '发送',
            sendState: false
        }
    },
    methods: {
        send: function(){
            let that = this;
            if(that.sendState){
                return false;
            }
            if(that.refValue == ''){
                that.$layer.tips('请输入图形验证码','#'+that.refId,{tips: 0});
                return false;
            }
            that.sendState = true;
            let time = 60;
            that.sendTxt = time+'秒';
            let timer = setInterval(function(){
                time --;
                if(time <= 0){
                    clearInterval(timer);
                    that.sendTxt = '发送';
                    that.sendState = false;
                    return false;
                }
                that.sendTxt = time+'秒';
            },1000);
        }
    }
}
</script>
