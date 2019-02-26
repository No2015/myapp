<template>
    <component v-bind:is="currentTabComponent"></component>
</template>

<script>
import Cate1 from './Cate1'
import Cate2 from './Cate2'
import Cate3 from './Cate3'
import Cate4 from './Cate4'

export default {
    name: 'Cate',
    components: {
        Cate1,
        Cate2,
        Cate3,
        Cate4
    },
    computed: {
        currentTabComponent(){
            let coms = ['Cate1','Cate2','Cate3','Cate4']
            let id = parseInt(this.$route.query.id-1)
            if(isNaN(id) || id < 0 || id > coms.length){
                id = 0
            }
            return coms[id]
        }
    },
	data () {
        let that = this
        return {}
    }
}
</script>
