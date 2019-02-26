<template>
    <div class="content">
        <div class="pad4 bgfff font5">
            <ul class="flex-box padt4">
                <li>姓名：</li>
                <li class="bjs-color-white">{{ name }}</li>
            </ul>  
            <ul class="flex-box padt4">
                <li>年龄：</li>
                <li class="bjs-color-white">{{ age }}</li>
            </ul>   
            <ul class="flex-box padt4">
                <li>性别：</li>
                <li class="bjs-color-white">{{ sex }}</li>
            </ul>   
            <ul class="flex-box padt4">
                <li>手机：</li>
                <li class="bjs-color-white">{{ phone }}</li>
            </ul>   
            <ul class="flex-box padt4">
                <li>等级：</li>
                <li class="bjs-color-white">{{ level }}</li>
            </ul>
            <p class="padt4">可输入</p>
            <ul class="flex-box padt4">
                <li>等级：</li>
                <li class="bjs-color-white">
                    <input type="text" name="level" class="form-input" v-model="level">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
	name: 'User',
	data () {
        let that = this
        return {
            name: that.$Global.NickName,
            age: that.$Global.Age,
            sex: that.$Global.Sex,
            phone: that.$Global.Phone,
            level: that.$Global.Level,
        }
    },
    beforeRouteLeave(to,from,next){
        //from.meta.keepAlive = true;
        //this.$destroy();
        next() // next（）别漏，不然不跳转
    }
}
</script>
