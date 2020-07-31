<template>
  <div class="warp">
    <category_header class="header-main">
        <i class="iconfont icon-search" slot="left"></i>
        <div slot="center">{{HotSearch}}</div>
        <i class="iconfont icon-msg" slot="right"></i>
    </category_header>
    <category_nav @switch-tab="getCurrentId"></category_nav>
    <div class="main">
      <roll ref="roll">
          <banner class="banner"></banner>
          <displaybar @displayber="updatescroll" :curId="curId"></displaybar>
      </roll>
    </div>
  </div>
</template>

<script>
  import category_header from "../../components/header"
  import category_nav from "./cnav"
  import banner from "../home/banner"
  import displaybar from "./displaybar"
  import roll from 'base/roll'
    export default {
        name: "category",
      components:{
          category_header,
          category_nav,
          banner,
          displaybar,
          roll
        },
      data() {
        return {
          curId: '',
          HotSearch: "好礼送不停",
          swiperOption: {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            setWrapperSize: true,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            mousewheel: true,
          }
        }
      },
      methods:{
        getCurrentId(id){
          this.curId = id;
        },
        updatescroll(){
            this.$refs.roll.update()
        }
      },
      created(){
          // console.log(this.$refs.swiper)
      },
      mounted(){
        // this.$refs.scroll && this.$refs.scroll.update();
      }
    }
</script>

<style lang="scss" scoped>

  /deep/ .banner{
    width:320px !important;
  }

  .header-main{
    position: relative !important;
    background: red;
  }

  .warp{
    height: 100%;

    & .main{
      width:100%;
      height: 100%;
      padding-left: 80px;
      padding-bottom: 50px;
      position: relative;

      & .banner{
        height: 160px !important;
        margin-top:10px;
      }
    }

  }

  //滚动条
  .swiper{
    height: 100%;
  }

</style>
