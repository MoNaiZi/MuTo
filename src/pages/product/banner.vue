<template>
  <div class="banner-wrap">
      <slider class="banner-main">
          <swiper-slide v-for="(item,index) in imgdata" :key="index">
              <img :src="item.imgurl"/>
          </swiper-slide>
      </slider>
    <!--<index_banner class="banner-main"></index_banner>-->
  </div>
</template>

<script>
    import slider from 'base/slider'
    import {img} from './config'
    export default {
        name: "product-banner",
        components:{
          slider
        },
      data(){
          return{
            imgdata:img
          }
      }
    }
</script>

<style lang="scss" scoped>
.banner-main{
  height: 340px;

  & img{
    height: 100%;
    width:100%;
  }
}
</style>
