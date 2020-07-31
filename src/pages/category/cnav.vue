<template>
<div class="swiper">
<swiper :options="swiperOption">
  <swiper-slide>
    <div class="nav-item" v-for="(item,index) in data" :key="index">
      <p :class="{'active':item.id === curId}" @click="switchTab(item.id)">{{item.name}}</p>
    </div>
  </swiper-slide>
  <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
</swiper>
</div>

</template>

<script>
  import {navdatalist} from "./config"
  import Slider from "../../base/slider/index";
    export default {
        name: "category-nav",
        components:{
          Slider
        },
        data(){
          return{
            curId:'',
            data:navdatalist,
            swiperOption:{
              direction: 'vertical',
              slidesPerView: 'auto',
              freeMode: true,
              setWrapperSize: true,
              // scrollbar: {
              //   el: '.swiper-scrollbar',
              //   hide:true
              // },
              mousewheel: true,
            }
          }
        },
      created(){
         this.init()
         this.switchTab(this.items[0].id)
      },
      methods:{
        init(){
          this.items = navdatalist;
        },
        switchTab(id){
          if(this.curId === id){ //作用不允许重复点击
            return;
          }
          this.curId = id;
          this.$emit('switch-tab',id);
        }
      },
      mounted(){
          // console.log(navdatalist)
      }
    }
</script>

<style lang="scss" scoped>
    .active{
      background: red;
      color: #fff;
    }

    .swiper{
      position: absolute;
        width:80px;
        height: 85%;
        background: #fff;
      }
    .swiper-container{
      height: 100%;
    }
    .swiper-wrapper{
      /*height: auto;*/
    }
    .swiper-slide{
      height: auto;
    }
    .nav-item{
        width:100%;
        height: 45px;
        font-size: 15px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        position: relative;
        margin-top: 4px;
      }
    .nav-item p:after{
      content: '';
      position: absolute;
      top:43px;
      left: 10%;
      width:60px;
      color: #eee;
      border: 0.5px solid;

    }
</style>
