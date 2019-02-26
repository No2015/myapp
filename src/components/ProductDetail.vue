<template>
    <div class="content">
        <img :src="detail.img">
        <p>{{ detail.title }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    data () {
        return {
            detail: {}
        }
    },
    mounted () {
        let that = this;
        let api = '/static/data/goodsdetail.json?id='+that.$route.query.id;
        that.axios.get(api).then((response) => {
            that.detail = response.data;
        });
    },
    methods: {
        
    }
}
</script>