<template>
    <div class="header-wrap">
      <base_header class="base_header">
          <div @click="remove" slot="left">删除</div>
          <div slot="center">购物车</div>
          <div slot="right">
            <i class="iconfont icon-msg"></i>
          </div>
      </base_header>
    </div>
</template>

<script>
    import base_header from 'components/header'
    import storage from 'assets/js/storage.js'
    export default {
        name: "cart_header",
        components:{
          base_header
        },
      props:{
        bobyid:{
          type:String,
          default:''
        }
      },
        methods:{
          remove(){
            if(this.bobyid !== ''){
              let data = storage.get('baby--data')
              console.log(data)
              let len = Object.keys(data).length
              for(let i in data){
                if(i === this.bobyid){
                  console.log(data[i])
                  delete data[i]
                  console.log(data)
                }else{
                  return;
                }
              }
            }else{
              console.log('没有宝贝')
              return false
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
    .header-wrap{
      position: relative;
      height: 50px;
      background: red;
    }
    .base_header{
    font-size: 20px;
    text-align: center;

    & .iconfont{
      font-size: 28px;
    }
  }
</style>
