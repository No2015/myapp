<template>
    <div class="content bgfff">
        <div class="pad440 font42">
            <div class="bora8 bg1f2029 tc">
                <ul class="flex-box padb2">
                    <li class="text-nowrap pad440">
                        <p class="padb2 font3">账户总额</p>
                        <p class="padb2 bjs-color-white font62"><span>197746.69</span></p>
                    </li>
                </ul>
                <ul class="flex-box padb2">
                    <li>
                        <p class="padt2 padb2 font3">挖矿累计收益</p>
                        <p class="padb2 bjs-color-white font62"><span>0</span><span class="font3 padl2">PSBT</span></p>
                    </li>
                    <li>
                        <p class="padt2 padb2 font3">社区累计收益</p>
                        <p class="padb2 bjs-color-white font62"><span>0</span><span class="font3 padl2">PSBT</span></p>
                    </li>
                </ul>
                <p class="padb4 padt2 font3">所属社区：<span></span></p>
            </div>
            <p class="padt2"></p>
            <p class="padt4 padb2">
                生态挖矿分类：
            </p>
            <ul class="flex-box padb4 padt4 text-nowrap tc">
                <li class="padr4">
                	<router-link class="bjs-btn bjs-btn-up bjs-btn-full font42 lh15" to="/psbt/in">转入</router-link>
                </li>
                <li class="padl4">
                	<router-link class="bjs-btn bjs-btn-down bjs-btn-full font42 lh15" to="/psbt/out">转出</router-link>
                </li>
            </ul>
            <div class="padt4 padb4">
                <h4 class="padt4 font5 bjs-color-blue">PSBT生态挖矿说明：</h4>
                <p class="padt4 lh15">为配合PSBT品源基金会更快速完善搭建技术体系及应用落地，故推出PSBT锁仓即挖矿的经营策略，它是PSBT品源基金及生态应用建设和未来发展的重要环节。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Psbt',
	data () {
        let that = this
        return {}
    }
}
</script>
