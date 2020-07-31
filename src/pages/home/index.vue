<template>
    <div class="home">
      <home_header :class="{bg:isbg}" ref="home_header"></home_header>
      <scroll
        @pull_up="pullToLoadMore"
        @pull_dom="pullDom"
        @backtop_show="backtop_show"
        @scroll="scroll"
        @scrollzero="scrollzero"
        @header_show="header_show"
        pulldown
        pulltop
        :recommend="recommends"
        @scroll-end="scrollEnd"
        ref="scroll"
        >

        <banner ref="slider"></banner>
        <indexnav/>
        <recommend @loaded="getRecommends" ref="recommend"></recommend>
      </scroll>

      <backtop @backtop="backtop" :backtop_switch="backtop_switch"></backtop>
      <router-view></router-view>
      home
    </div>

</template>

<script>
  import home_header from "./header"
  import banner from "./banner"
  import indexnav from './nav'
  import scroll from './scroll'
  import recommend from './recommend'
  import backtop from 'base/backtop'

    export default {
        name: "Home",
        components:{
          home_header,
          banner,
          indexnav,
          scroll,
          recommend,
          backtop
        },
      data(){
          return{
            recommends:[],
            isBacktopVisible:false,
            backtop_switch:false,
            isbg:false,
          }
      },
      props:{

      },
      methods:{
          updateScroll(){

          },
        getRecommends(recommends){
            console.log(recommends)
            this.recommends = recommends
        },
        pullToLoadMore(end){
            this.$refs.slider.update().then(end)
            // setTimeout(()=>{
            //   console.log('下拉刷新')
            //   end()
            // },1000)
        },
        pullDom(end){
          console.log("pullDown")
          console.log(this.$refs.recommend.update().then())
          this.$refs.recommend.update().then(end)
        },
        scrollEnd(translate,scroll){

            this.isBacktopVisible = translate < 0 && -translate > scroll.height
          console.log(this.isBacktopVisible)
        },
        //返回顶部按钮
        backtop(){
            this.$refs.scroll.ToTop()
        },
        backtop_show(){
            this.backtop_switch = true
        },
        scrollzero(){
            this.backtop_switch=false
            console.log("滚动条等于零了返回顶部按钮可以隐藏了")
        },

        //搜索栏隐藏和显示
        scroll(translate) {
          this.changeHeaderStatus(translate);
        },
        changeHeaderStatus(translate) {
          if (translate > 100) {
            this.$refs.home_header.hide();
            return;
          }if(translate < -130){
            this.isbg=true
            return;
          }
          this.isbg=false;
          this.$refs.home_header.show();
        },
        header_show(){
            console.log("上拉刷新结束显示header")
            this.$refs.home_header.show()
        }
      },
      mounted(){
          this.scroll()
      }
    }
</script>

<style>
  .home{
    width:100%;
    height:100%;
  }
  .content{
    height: 200px;
    width: 100%;
    border:1px solid;
    background: aquamarine;
  }

  .bg{
    background: rgba(220,20,60,0.8);
  }
</style>
