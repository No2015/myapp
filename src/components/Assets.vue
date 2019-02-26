<template>
    <div class="content bgfff" @scroll="scroll">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        	<div class="list padl4 padr4">
	        	<ul v-for="(item,key) in list" :key="key" class="padt4 flex-box bob1">
	                <li>
	                    <p class="text-nowrap">
	                        <span>序号：</span>
	                        <span class="bjs-color-white">{{ item.count }}</span>
	                    </p>
	                    <p class="text-nowrap padt2">
	                        <span>时间：</span>
	                        <span class="bjs-color-white">2018-10-27 10:40:04</span>
	                    </p>
	                    <p class="text-nowrap padt2">
	                        <span>类型：</span>
	                        <span class="bjs-color-white">币币账户</span> 划到 <span class="bjs-color-white">法币账户</span>
	                    </p>
	                    <p class="text-nowrap padt2">
	                        <span>币种：</span>
	                        <span class="bjs-color-white">CNYT(CNYT)</span>
	                    </p>
	                    <p class="text-nowrap padt2">
	                        <span>数量：</span>
	                        <span class="bjs-color-white">3.14159200 CNYT</span>
	                    </p>
	                    <p class="padt4"></p>
	                </li>
	        	</ul>
        	</div>
        	<div v-show="busy" class="loadings padb2 padt2 tc">加载中...</div>
        	<div v-show="end" class="padb2 padt2 tc">没有更多了</div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Assets',
	data () {
        let that = this
        return {
            scrollTop: 0,
        	list: [],
        	busy: false,
        	page: 0,
        	count: 0,
        	end: false
        }
    },
    activated () {
        document.querySelector('.content').scrollTop = this.scrollTop;
        //console.log(3)
    },
    methods: {
    	loadMore: function() {
    		if(this.count > 35){
	    		this.busy = false;
	    		this.end = true;
	    		return false;
	    	}
    		this.busy = true //把busy置位true，这次请求结束前不再执行 
    		setTimeout(() => {
        		this.getGoodLists(true)
      		}, 500)
	    },
	    getGoodLists: function(){	    	
	    	for (var i = 0, j = 10; i < j; i++) {
      			this.list.push({ count: this.count++ });
    		}
    		this.busy = false;
	    },
        scroll: function(e){
            this.scrollTop = e.target.scrollTop;
        }
	},
    beforeRouteLeave(to,from,next){
        /*if(to.name == 'Otc'){
        	from.meta.keepAlive = true
        }*/
        next() // next（）别漏，不然不跳转
    }
}
</script>
