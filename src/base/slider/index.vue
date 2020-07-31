<template>
<swiper class="swiper" :options="swiperOtion" :key="keyId">
    <slot></slot>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>

<script>
    export default {
        name: "slider",
        data(){
          return {
            keyId:Math.random(),
            swiperOtion:{
              slidesPerView:1,
              loop:true,
              pagination:{
                el:".swiper-pagination",
                clickable:true
              }
            }
          }
        },
      props:{
          data:{
            type:Array,
            default:function(){
              return []
            }
          }
      },
      watch:{
          data(newData){
            // console.log('slider-data')
            if(newData.length === 0){
              return;
            }
            this.keyId = Math.random()
          }
      }
    }
</script>

<style lang="scss" scoped>
  .swiper{
    width: 100%;
    height: 230px;
  }
</style>
