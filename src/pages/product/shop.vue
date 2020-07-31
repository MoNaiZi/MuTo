<template>
    <div class="shop-wrap">
      <div class="shop-wrap-top">
          <p class="img-main"><img src="./QQ图片20170507224544.jpg"/></p>
          <p class="shop-name">店铺名字</p>
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
</template>

<script>
    export default {
        name: "product-shop"
    }
</script>

<style lang="scss" scoped>

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
      font-size: 20px;
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
