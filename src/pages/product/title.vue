<template>
<div class="title-warp">
  <div class="title-main" v-for="(item,index) in data" :key="index">
    <div class="top">
      <ul class="top-main">
        <li class="top-left">${{item.price.actPrice}}</li>
        <li class="top-right">zzzzzz</li>
      </ul>
    </div>
    <h1>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h1>
    <div class="bottom">
      <ul class="bottom-main">
        <li class="bottom-left">包邮</li>
        <li class="bottom-middle">月销量：xxxxx</li>
        <li class="bottom-right">湖北非洲</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import {getHomeRecommend} from "api/homeapi.js"
    export default {
        name: "product-title",
        data(){
          return{
            data:[]
          }
        },
      mounted(){

      },
        methods:{
        },
      created(){
          this.id = Number(this.$router.app._route.params.id)
          // this.getdata()
          let that = this.data
          getHomeRecommend().then(data => {
            for(let i = 0 ; i < data.itemList.length;i++){
              if(data.itemList[i].baseinfo.itemId === this.id){
                that.push(data.itemList[i])
                this.$emit('title')
              }
            }
          })
      }
    }
</script>
215, 60, 74
<style lang="scss" scoped>
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
    font-size: 28px;
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

</style>
