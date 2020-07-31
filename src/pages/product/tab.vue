<template>
  <div class="tab-wrap">
    <ul class="tab-main">
      <i class="iconfont icon-shop"></i>
      <i class="iconfont icon-service"></i>
      <i class="iconfont icon-collect"></i>
      <p class="tab-main-txt-pleft" @click="addbaby">加入购物车</p>
      <p class="tab-main-txt-pright">马上枪</p>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "product-tab",
        methods:{
          addbaby(){
            const tab_id = this.$router.app._route.params.id
            this.$emit('tab',tab_id)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .tab-main{
    display: flex;
    align-items:center;
    justify-content: space-around;
    background: #fff;
    z-index:100;
    height: 60px;
    width:100%;
    position: fixed;
    bottom: 0;
    box-shadow:0px -1px 5px #eee;

    & .iconfont{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & .icon-shop:after{
      content: '店铺';
      font-size: 14px;
    }

    & .icon-service:after{
      content: '客服';
      font-size: 14px;
    }

    & .icon-collect:after{
      content: '收藏';
      font-size: 14px;
    }

    & p{
      font-size: 18px;
      width:120px;
      height: 100%;
      line-height: 60px;
      text-align: center;
      color:#fff;
    }
    & .tab-main-txt-pleft{
      background: rgb(242, 162, 41);
      margin-right: -20px;
    }
    & .tab-main-txt-pright{
      background: red;
    }
  }

</style>
