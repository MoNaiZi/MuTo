<template>
<div class="order-wrap">
  <div class="order-main">
    <div class="order-main-top">
      <p>我的订单</p>
      <p>查看我的全部订单 ></p>
    </div>
    <ul  class="order-main-bottom">
      <li class="iconfont icon-daifukuan">
        待付款
      </li>
      <li class="iconfont icon-daishouhuofuwu">
        待收货
      </li>
      <li class="iconfont icon-daipingjia">
        待评价
      </li>
      <li class="iconfont icon-refund">
        退货/退款
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style lang="scss" scoped>
.order-wrap{
  background: #fff;
  margin-top:15px;

  .order-main{
    &-top{
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      padding:13px 14px;
      border-bottom:1px solid #ccc5c5;
    }

    &-bottom{
      display: flex;
      justify-content: space-around;

      li{
        display: flex;
        flex-direction: column;
        align-items:center;
        font-size: 18px;
        padding:10px 10px;
      }
      li:before{
        font-size: 30px;
      }
    }
  }
}
</style>
