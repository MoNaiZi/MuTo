<template>
  <div class="hot-warp">
    <div class="hot-main">
      <h1>热门搜索</h1>
      <div class="item">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "hot-search"
    }
</script>

<style lang="scss" scoped>
  .hot-main{
    width:100%;
    height: auto;
    margin-top:3px;
    background:#fff;

    & h1{
      font-size: 16px;
      padding-top:5px;
      font-weight: 1000;
    }
  }
</style>
