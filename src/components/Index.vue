<template>
    <div class="content" @scroll="scroll">
        <Slide :api="slide.api" :height="slide.height" />
        <p class="padt4"></p>
        <ul class="flex-box pad4 bgfff" @click="brick()">
            <li class="tl font5 bjs-color-blue">量化搬砖</li>
            <li class="tr font3 arr-r padr4">我要参与</li>
        </ul>
        <ul class="padt4 flex-box tc">
            <li @click="cate(1)">1</li>
            <li @click="cate(2)">2</li>
            <li @click="cate(3)">3</li>
            <li @click="cate(4)">4</li>
        </ul>
        <div style="height: 1080px"></div>
    </div>
</template>

<script>
import Slide from './slider/Slide'
export default {
    name: 'Index',
    components: {
        Slide
    },
    created () {
        //console.log(1)
    },
    mounted () {
        //console.log(2)
    },
    activated () {
        document.querySelector('.content').scrollTop = this.scrollTop;
        //console.log(3)
    },
    deactivated () {        
        //console.log(4)
    },
    data () {
        const WIDTH = window.innerWidth;
        return {
            scrollTop: 0,
            slide: {
                api: this.$Api.slide,
                _width: 1125,
                _height: 422,
                height: 422*WIDTH/1125
            }
        }
    },
    methods: {
        brick () {
            this.$router.push('/brick');
        },
        cate (id) {
            this.$router.push({ name: 'Cate', path: '/cate', query: {id: id}});
        },
        scroll (e) {
            this.scrollTop = e.target.scrollTop;
        }
    }
}
</script>
