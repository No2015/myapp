<template>
    <li class="form-item padb2 padt4">
        <h5 class="form-label font5 padb2">{{ title }}</h5>
        <ul class="flex-box">
            <li class="flex-item-5">
            	<input :type="type" :value="value" :id="id" class="form-input" :placeholder="placeholder" @input="$emit('update:value',$event.target.value)" />
            </li>
            <li class="flex-item-2 tr">
                <img class="form-input" :src="verifySrc" style="width: 90%; padding: 0;" @click="refresh()">
            </li>
        </ul>
    </li>  
</template>

<script>
export default {
    name: 'LiInputImg',
    props: ['title','type','id','placeholder','value'],
    data () {
        return {
            verifySrc: 'https://www.bjs.ai/Verify/code.html',
            verifyimg: 'https://www.bjs.ai/Verify/code.html',
        }
    },
    methods: {
        refresh: function(){
            this.verifySrc = this.verifyimg+'?random='+Math.random();
        }
    }
}
</script>
