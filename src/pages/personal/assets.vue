<template>
<div class="assets-wrap">
  <h1 class="iconfont icon-zichan">我的资产</h1>
  <ul>
    <li>现金券</li>
    <li>待收货</li>
    <li>待评价</li>
    <li>礼品卡</li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "assets"
    }
</script>

<style lang="scss" scoped>
.assets-wrap{
  background: #fff;
  margin-top:15px;

  h1{
    padding: 10px 10px;
    font-size: 20px;
    border-bottom: 1px solid #ccc5c5;
  }
  ul{
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    margin:4px;
    height: 40px;
    align-items: center;
    color:#8b8484;
  }
}
</style>
