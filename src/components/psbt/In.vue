<template>
    <div class="content bgfff content2">
        <div class="pad440 font42">
            <ul class="flex-box padb4 tc">
                <li :class="(num == 1 ? 'default-form-blue ' : '')+'mr2 bora8 bg1f2029 text-nowrap hand'" @click="check(1,10000)">
                    <p :class="(num == 1 ? '' : 'bjs-color-white ')+'font62 padt4 padb4'">1个月</p>
                    <p class="padt2 padb2 font3">挖矿量：<span>5%</span></p>
                    <p class="padb4 font3">最低：<span>10000PSBT</span></p>
                </li>
                <li :class="(num == 2 ? 'default-form-blue ' : '')+'ml2 bora8 bg1f2029 text-nowrap hand'" @click="check(2,10000)">
                    <p :class="(num == 2 ? '' : 'bjs-color-white ')+'font62 padt4 padb4'">2个月</p>
                    <p class="padt2 padb2 font3">挖矿量：<span>12%</span></p>
                    <p class="padb4 font3">最低：<span>10000PSBT</span></p>
                </li>
            </ul>
            <ul class="flex-box padb4 tc">
                <li :class="(num == 3 ? 'default-form-blue ' : '')+'mr2 bora8 bg1f2029 text-nowrap hand'" @click="check(3,10000)">
                    <p :class="(num == 3 ? '' : 'bjs-color-white ')+'font62 padt4 padb4'">3个月</p>
                    <p class="padt2 padb2 font3">挖矿量：<span>24%</span></p>
                    <p class="padb4 font3">最低：<span>10000PSBT</span></p>
                </li>
                <li :class="(num == 6 ? 'default-form-blue ' : '')+'ml2 bora8 bg1f2029 text-nowrap hand'" @click="check(6,10000)">
                    <p :class="(num == 6 ? '' : 'bjs-color-white ')+'font62 padt4 padb4'">6个月</p>
                    <p class="padt2 padb2 font3">挖矿量：<span>60%</span></p>
                    <p class="padb4 font3">最低：<span>10000PSBT</span></p>
                </li>
            </ul>
            <p class="padt2"></p>
            <ul class="flex-box padt4 padb4 ml2 mr2 text-nowrap">
                <li class="">
                    PSBT持有量：
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
                    <input type="text" class="form-input bod-white bjs-number" data-min="0" data-max="200000000000" placeholder="挖矿转入数量" id="quantity" v-model="quantity">
                </p>
                <p class="padb4">
                    <input type="password" class="form-input bod-white" placeholder="请输入交易密码" id="pay_password" v-model="paypassword">
                </p>
            </div>
            <div class="padt4">
                <button class="bjs-btn bjs-btn-blue bjs-btn-full font5 lh15" id="submit" @click="submit()">转入</button>
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
	name: 'PsbtIn',
	data () {
        let that = this
        return {
            quantity: '',
            paypassword: '',
            num: '',
            min: ''
        }
    },
    methods: {
        submit: function(){
            let data = {
                quantity: this.quantity,
                paypassword: this.paypassword,
                num: this.num,
                min: this.min
            };
            console.log(data);
        },
        check: function(num,min){
            this.num = num;
            this.min = min;
        }
    }
}
</script>
