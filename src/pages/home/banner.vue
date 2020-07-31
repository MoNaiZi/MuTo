<template>
    <slider :data="slidedata">
      <loading v-if="!slidedata.length"></loading>
      <swiper-slide v-else class="banner" v-for="(item,index) in slidedata" :key="index">
        <a class="banner-a" :to="item.linkUrl">
          <img class="banner-img" :src="item.picUrl"/>
        </a>
      </swiper-slide>
    </slider>
</template>

<script>
  import slider from "base/slider"
  import {getHomeSlider} from 'api/homeapi'
  import loading from 'base/loading'

    export default {
        name: "banner",
        components:{
          slider,
          loading
        },
      data(){
          return{
            slidedata:[]
          }
      },
      created(){
        this.getSlider()
      },
      methods:{
        update(){
          return this.getSlider()
        },
        getSlider(){
          return getHomeSlider().then(data => {
            this.slidedata = data
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
.banner{
  &-img{
    width:100%;
    height: 100%;
  }
  &-a{
    display: block;
    width:100%;
    height: 100%;
  }
}
</style>
