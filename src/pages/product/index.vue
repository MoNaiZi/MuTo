<template>
  <div class="product">
    <div class="product-main">
      <div class="loading-wrap" v-if="switchloading">
        <loading/>
      </div>
      <prduct_sroll ref="swiper" class="prduct_scroll" switchscroll>
        <product_header/>
        <div  v-for="(item,index) in data" :key="index">

          <prduct_banner/>

            <div class="title-warp">
              <div class="title-main">
                <div class="top">
                  <ul class="top-main">
                    <li class="top-left">${{item.price.actPrice}}</li>
                    <li class="top-right">已售：{{item.remind.soldCount}}</li>
                  </ul>
                </div>
                <h1>{{item.name.longName}}</h1>
                <div class="bottom">
                  <ul class="bottom-main">
                    <li class="bottom-left">包邮</li>
                    <li class="bottom-middle">月销量:{{item.remind.soldCount}}</li>
                    <li class="bottom-right">湖北非洲</li>
                  </ul>
                </div>
              </div>
            </div>
            <!--<product_title @title="title"></product_title>-->

            <div class="comment-wrap">
              <div class="comment-top">
                <p>宝贝评价(2019)</p>
                <p class="comment-top-right">查看全部<span class="iconfont icon-back"></span></p>
              </div>
              <div class="comment-middle">
                <ul class="comment-middle-ul">
                  <li>味道好闻(4)</li>
                  <li>味道是正品(777)</li>
                  <li>好香(4)</li>
                  <li>厉害厉害(4)</li>
                  <li>很棒(4)</li>
                </ul>
              </div>
              <div class="comment-bottom">
                <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
                <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
                <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
              </div>
            </div>
            <!--<prduct_comment/>-->

            <div class="shop-wrap">
              <div class="shop-wrap-top">
                <p class="img-main"><img :src="item.extend.xpImg.length ? item.extend.xpImg : item.extend.itemLogoMoheXinPicV2_13"/></p>
                <p class="shop-name">{{item.extend.shopTitle}}</p>
                <!--<p class="shop-name">{{item.promotion.marketing.BENEFIT_LIST ? item.promotion.marketing.BENEFIT_LIST[0].shopName : "官方店铺"}}</p>-->
                <p class="all-body">
                  全部宝贝
                </p>
                <p class="enter-store">
                  进店逛逛
                </p>
              </div>
              <div class="shop-wrap-bottom">
                <ul class="shop-wrap-bottom-boby">
                  <li>宝贝描述</li>
                  <li>4.8</li>
                  <li>高</li>
                </ul>
                <ul class="shop-wrap-bottom-seller">
                  <li>卖家服务</li>
                  <li>4.8</li>
                  <li>高</li>
                </ul>
                <ul class="shop-wrap-bottom-logistics">
                  <li>物流服务</li>
                  <li>4.8</li>
                  <li>高</li>
                </ul>
              </div>
            </div>
        </div>
        <!--<prduct_shop/>-->
      </prduct_sroll>

      <prduct_tab @tab="addbaby" class="prduct_tab"/>
    </div>


</div>
</template>

<script>
  import {getHomeRecommend} from "api/homeapi.js"
  import product_header from './header'
  import prduct_sroll from 'base/roll'
  import prduct_tab from './tab.vue'
  import slider from 'base/slider'
  import prduct_banner from './banner'
  import loading from 'base/loading'
  import {GATEGORY_CONTENT_UPDATE_TIME,GATEGORY_CONTENT_UPDATE_TIME_INIERVAL} from './config'
  import storage from 'assets/js/storage'
    export default {
        name: "product",
        components:{
          product_header,
          prduct_sroll,
          prduct_tab,
          slider,
          prduct_banner,
          loading
          // product_title,
          // prduct_comment,
          // prduct_shop
        },
        data(){
          return{
            data:[],
            content:[],
            switchloading:true
          }
        },
        created(){
          this.SetStorage()//设置缓存
          this.RemoveStorage()//自动过期删除缓存
        },
      methods:{
      getData(){
        const id = Number(this.$router.app._route.params.id)
        getHomeRecommend().then(data => {
        let datalist = data.itemList
        for(let i=0;i<datalist.length;i++){
          if(datalist[i].baseinfo.itemId === id){
            this.data = [datalist[i]]
            this.switchloading=false
        }
      }
    })
      },
      SetStorage(){
          const lochost = window.localStorage;
          const id = Number(this.$router.app._route.params.id)
          const curTime = new Date().getTime()
          const getdata = lochost.getItem(id) //获取缓存

            if(getdata){ //有缓存
              this.data = JSON.parse(getdata)
              this.switchloading=false

              //缓存过期了
              let updateTime = curTime -  this.data[0].updateTime
              console.log(updateTime)
              console.log(GATEGORY_CONTENT_UPDATE_TIME_INIERVAL)
             if(updateTime >= GATEGORY_CONTENT_UPDATE_TIME ){
                  console.log('缓存过期了')
                  this.UpdateStorage(this.data,id,curTime)
                }
            }else{ //没有缓存
              this.getData()
              setTimeout(()=>{
                this.UpdateStorage(this.data,id,curTime)
              },1000)
            }
       },
        //存储缓存和更新和添加时间
      UpdateStorage(contents,id,time){
          const lochost = window.localStorage;
          contents = contents || {}
          contents[id] = {};
          contents[id].updateTime = time
          contents = Object.assign(contents[0],contents[id])
          delete contents[id]
          const datalist = JSON.stringify(this.data)
          lochost.setItem(id,datalist)
      },
        //删除过期缓存
      RemoveStorage(){

      },

      //数据传到到购物车
      addbaby(tab_id){
        const data = this.data[0]
        this.bus.$emit("pr_addbaby",data,tab_id)
      }
      },
      mounted(){
          // console.log(this.data)
      }
    }
</script>
<style lang="scss" scoped>
  .loading-wrap{
    width:100%;
    height: 200px;
    position: absolute;
    top:100px;
    z-index: 10;
  }

  .product-main {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background:#eee;
  }

  .prduct_scroll{
    height: 100%;
    padding-bottom:70px;
  }

  //title
  .title-main{
    background: #fff;
  }

  .top-main{
    height: 55px;
    background:rgb(254,72,122);
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 15px;

    & .top-right{
      background: rgb(215,60,74);
      padding:9px;
      font-size: 15px;
    }
  }

  h1{
    width:95%;
    font-size: 18px;
    word-break:break-all;
    margin: 0 auto;
    margin-top:10px;
  }

  .bottom-main{
    display: flex;
    justify-content: space-between;
    margin-top:30px;
    padding:10px;
  }

  //comment
  .comment-wrap{
    padding: 0 10px;
    background: #fff;
    margin-top:10px;
  }

  .comment-top{
    display: flex;
    align-items:center;
    justify-content: space-between;
    height: 40px;
    font-size: 15px;

    &-right{
      color: red;
    }

    & .iconfont{
      display: inline-block;
      transform: rotateY(180deg);
      font-size:17px;
      margin-left: 15px;
    }
  }

  .comment-middle-ul:after{
    content: '';
    width:100px;
  }
  .comment-middle-ul{
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    font-size: 15px;

    & li{
      background:rgb(254, 236, 234);
      padding: 10px 10px;
      border-radius: 25px;
      margin-top:10px;
    }
  }

  .comment-bottom{
    margin-top:10px;
    height: auto;
    padding-left: 10px;
    padding-bottom: 10px;

    & p{
      margin-top:20px;
    }
  }

  //shop
  .shop-wrap{
    background: #fff;
    margin-top:20px;
  }
  .shop-wrap-top{
    width:100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    .shop-name{
      font-size: 14px;
    }

    & .all-body,
    & .enter-store{
      background: rgb(255, 125, 0);
      color:#fff;
      width:90px;
      text-align:center;
      padding:10px 10px;
      border-radius: 30px;
    }

    & .all-body{
      color:red;
      background: #fff;
      border:1px solid rgb(255,125,0);
    }

    .img-main{
      width:70px;
      height: 70px;
      float: left;

      & img{
        height: 100%;
        width:100%;
      }
    }
  }

  .shop-wrap-bottom{
    display: flex;
    justify-content: space-between;
    padding:0px 15px 15px 3px;
    height: 30px;
    color:rgb(168, 168, 168);

    & ul{
      display: flex;
      text-align: center;
      height: 20px;
      line-height: 20px;

      & li{
        margin-left: 10px;
      }

      & li:last-child{
        width:20px;
        height: 20px;
        margin-left: 10px;
        background: #e5e5e5;
        border-radius: 15px;
      }
    }
  }

</style>
