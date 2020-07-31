<template>
  <swiper class="swiper" ref="swiper" :options="swiperOption">
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div v-if="switchscroll" class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'swiper-example-scroll-container',
    title: 'Scroll container',
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide:true
          },
          mousewheel: true
        }
      }
    },
    props:{
      switchscroll:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      update(){
        this.$refs.swiper.update()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-slide{
    height: auto;
  }
</style>
