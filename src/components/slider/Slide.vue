<template>
<!-- 制作一个框架包裹slider -->
    <div class="slide" :style="style">
        <!-- 配置slider组件 -->
        <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
            <!-- 直接使用slideritem slot -->
            <!-- <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem> -->
            <slideritem v-for="(item,index) in someList" :key="index"><img class="w100" :src="item.img" @click="tolink(item.link)"></slideritem>
            <!-- 设置loading,可自定义 -->
            <div slot="loading">loading...</div>
        </slider>
    </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'// import slider components
export default {
    name: 'Slide',
    props: ['api','height'],
    data () {
        return {
            style: '',
            //Image list
            someList:[],
            currentPage: 0,
            //Sliding configuration [obj]
            options: {
                currentPage: 0,//当前页码
                //thresholdDistance:100,//滑动判定距离
                //thresholdTime:100,//滑动判定时间
                autoplay:3000,//自动滚动[ms]
                loop:true,//循环滚动
                //loopedSlides:1,
                slidesToScroll:1,//每次滑动项数
                timingFunction: 'ease',
                speed: 500
            }
        }
    },
    components: {
        slider,
        slideritem
    },
    mounted () {
        let that = this;
        if(that.height){
            that.style = 'height:'+that.height+'px';
        }
        that.axios.get(that.api).then((response) => {
            that.someList = response.data;
            //that.style = '';
        });
    },
    activated () {
        if(this.currentPage >= this.someList.length || this.currentPage < 0){
            this.currentPage = 0
        }
        this.$refs.slider.slide(this.currentPage)
        this.$refs.slider.$emit('autoplayStart',3000)
    },
    deactivated (){
        this.$refs.slider.$emit('autoplayStop')
    },
    methods: {
        tolink (link){
            if(link){
                this.$router.push(link);
            }
        },
        // Listener event
        slide (data) {
            this.currentPage = data.currentPage;
        },
        onTap (data) {
            //console.log(data)
        },
        onInit (data) {
            //console.log(data)
        }
    }
}
</script> 
