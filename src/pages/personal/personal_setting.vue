<template>
<div class="personal_setting_wrap">
  <ul>
    <li class="iconfont icon-service">售后服务<span>></span></li>
    <li class="iconfont icon-collect">意见反馈<span>></span></li>
    <li class="iconfont icon-cart">收货地址<span>></span></li>
    <li class="iconfont icon-close">退出登录<span>></span></li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "personal_setting"
    }
</script>

<style lang="scss" scoped>
.personal_setting_wrap{
  background: #fff;
  margin-top:15px;

  ul{
    li{
      font-size: 20px;
      padding:10px 4px;
      border-bottom:1px solid #959595;
      display: flex;
      position: relative;

      span{
        position: absolute;
        right:15px;
        color:#ccc5c5;
      }
    }
    li:before{
      font-size:25px;
      padding-right:10px;
    }
  }
}
</style>
