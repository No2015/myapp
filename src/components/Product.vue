<template>
    <div class="content">
        <div v-for="(item,index) in someList" :key="index" @click="detail(item.id)">
            <img :src="item.img">
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data () {
        return {
            someList: []
        }
    },
    mounted () {
        let that = this;
        let api = '/static/data/goods.json';
        that.axios.get(api).then((response) => {
            that.someList = response.data;
            //that.style = '';
        });
    },
    methods: {
        detail (id){
            this.$router.push({ name: "ProductDetail", query: {id: id}});
        }
    }
}
</script>
