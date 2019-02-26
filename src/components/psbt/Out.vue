<template>
    <div class="content bgfff content2">
        <div class="pad440 font42">
            <ul class="flex-box padb4">
                <li class="bora8 bg1f2029 text-nowrap pad440">
                    <p class="padb2 font3">账户总额</p>
                    <p class="padb4 bjs-color-white font62"><span>197746.69</span></p>
                    <p class="padt2 padb2 font3">锁仓量</p>
                    <p class="padb4 bjs-color-white font62"><span>184112.00000000</span></p>
                </li>
            </ul>
            <p class="padt2"></p>
            <ul class="flex-box padt4 padb4 ml2 mr2 text-nowrap">
                <li class="">
                    可转出余额：
                </li>
                <li class="tr">5310904</li>
            </ul>
             <ul class="flex-box padb4 ml2 mr2 text-nowrap">
                <li class="">
                    社区归属：
                </li>
                <li class="tr">重庆</li>
            </ul>
            <div class="padb4">
                <p class="padb4">
                    <input type="text" class="form-input bod-white bjs-number" data-min="0" data-max="999999999999" placeholder="挖矿转出数量" id="quantity" v-model="quantity">
                </p>
                <p class="padb4">
                    <input type="password" class="hide">
                    <input type="password" class="form-input bod-white" placeholder="请输入交易密码" id="pay_password" v-model="paypassword">
                </p>
            </div>
            <div class="padt4">
                <button class="bjs-btn bjs-btn-blue bjs-btn-full font5 lh15" id="submit" @click="submit()">转出</button>
            </div>
            <div class="padt4 padb4">
                <h4 class="padt4 font5 bjs-color-blue">PSBT生态挖矿说明：</h4>
                <p class="padt4 lh15">为配合PSBT品源基金会更快速完善搭建技术体系及应用落地，故推出PSBT锁仓即挖矿的经营策略，它是PSBT品源基金及生态应用建设和未来发展的重要环节。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'PsbtOut',
	data () {
        let that = this
        return {
            quantity: '',
            paypassword: ''
        }
    },
    methods: {
        submit: function(){
            let data = {
                quantity: this.quantity,
                paypassword: this.paypassword
            };
            console.log(data);
        }
    }
}
</script>
