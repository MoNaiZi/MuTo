<template>
  <swiper ref="swiper"  :options="swiperOption">
    <div  class="Refresh-UP" v-if="pulldown">
      <loading class="loading-main-loading" :text="Text" ref="pullDownLoading"></loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="Refresh-Bottom" v-if="pulltop">
      <loading class="loading-main-bottom" :text="BottomText" ref="pullUpLoading"></loading>
    </div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import loading from 'base/loading'
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END,

  } from './config'

  export default {
    name: '',
    components:{
      loading
    },
    data() {
      return {
        Text:PULL_DOWN_TEXT_INIT,
        BottomText:PULL_UP_TEXT_INIT,
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide:true
          },
          mousewheel: true,
          on:{
            sliderMove:this.scroll,
            touchEnd:this.touchEnd,
            //上拉刷新
            transitionEnd:this.scrollup
          }
        }
      }
    },
    props:{
      scrollbar:{
        type: Boolean,
        default: true
      },
      pulldown:{
        type:Boolean,
        default:false
      },
      pulltop:{
        type:Boolean,
        default:false
      }
    },
    methods:{

      //上拉刷新
      scrollup(){
        const swiper =this.$refs.swiper.swiper;
        console.log(swiper.translate)
        console.log(this.$refs.pullUpLoading)
        this.$emit('scroll-end',swiper.translate,swiper)

      },
      // updatescroll(){
      //   // console.log(this.$refs.swiper.swiper.scrollbar.updateSize)
      //   console.log(this.$refs.swiper)
      //   // this.$refs.swiper.swiper.scrollbar.updateSize()
      //   // this.$refs.swiper && this.$refs.swiper.swiper.update();
      //   // return this.$refs.swiper.updatescroll()
      //
      // },
      //下拉刷新
      //第一部分开始刷新
      scroll(){
        const swiper = this.$refs.swiper.swiper

        this.$emit('scroll', swiper.translate, swiper, this.pulling)

        console.log(swiper.translate)
        if(swiper.translate > 0){
          if(!this.pulldown){
             return
          }
        }if(swiper.translate > PULL_DOWN_HEIGHT) {
          console.log(this.$refs.pullDownLoading)
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
        }else{
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
        }if(swiper.translate < -1000){
          this.$emit("backtop_show")
        }
      },
      //刷新中
      touchEnd(){
        const swiper = this.$refs.swiper.swiper

        if(swiper.translate > PULL_DOWN_HEIGHT){
          if(!this.pulldown){
            return;
          }
          swiper.allowTouchMove = false;  //禁止触摸
          swiper.setTransition(swiper.params.speed) //定住的时候的过渡动画
          swiper.setTranslate(PULL_DOWN_HEIGHT)    //设置滚动条的位置
          swiper.params.virtualTranslate = true;  /// 定住不回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING) //定住不会弹显示的字

          this.$emit('pull_up',this.pullDownEnd);
        }
        //上啦刷新
        else if(swiper.isEnd){ //如果swiper在最小 isEnd就为true
            const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
            console.log(swiper.height)
            console.log(totalHeight)
            console.log(swiper.translate)
            const isPullUp = Math.abs(swiper.translate) + swiper.height - 50 > totalHeight;
            console.log(isPullUp)

          if(isPullUp){
              console.log(isPullUp)
              swiper.allowTouchMove = false;   //禁止触摸
              swiper.setTransition(swiper.params.speed); //定住过渡动画
              swiper.setTranslate(-(totalHeight + 50 - swiper.height))//定住的高度
            swiper.params.virtualTranslate  = true;  // 定住不会弹
              this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START); //定住不回弹显示的文字
              this.$emit('pull_dom',this.pullUpEnd)
          }
        }
      },
      //下拉刷新结束
      pullDownEnd(){
        console.log("pullUpend")
        const swiper = this.$refs.swiper.swiper;
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove=true
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(0)
        this.$emit("header_show")
      },
      //上拉刷新结束
      pullUpEnd(){
        const swiper = this.$refs.swiper.swiper;
        this.$refs.pullDownLoading.setText(PULL_UP_TEXT_END)
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove=true
      },

      //回到顶部
      ToTop(){
        const swiper = this.$refs.swiper.swiper;
        swiper.setTransition(swiper.params.speed)
        swiper.setTranslate(0)
        if(swiper.translate === 0){
            console.log("现在把参数传到父组件里面去")
            this.$emit("scrollzero")
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container{
    height: 100%;
    overflow: hidden;
  }
  .swiper-slide{
    height: auto;
  }

  //下拉刷新
  .Refresh-UP{           //这个样式深思呀 要不然以后要吃大亏
    position: absolute;
    margin: 100px auto;
    left: 0;
    bottom: 100%;
    width:100%;
    height: 80px;

    &-loading{
      margin:0 auto;
    }
  }

  //上拉刷新
  .loading-main-bottom{
    width:150px !important;
    margin:30px auto !important;
  }

</style>
