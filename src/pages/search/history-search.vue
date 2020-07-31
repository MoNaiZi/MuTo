<template>
  <div class="history-warp">
    <h1>历史搜索</h1>
    <div class="item">
      111111111
    </div>
    <div class="remove-wrap">
      <div class="remove-main">
        <i class="iconfont icon-delete"></i>
        <p>清空历史搜索</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "history-search"
    }
</script>

<style lang="scss" scoped>
.history-warp{
  width:100%;
  height: auto;
  background: #fff;
  margin-top:10px;

  & h1{
    font-size: 17px;
    font-weight: 1000;
    padding-top:10px;
  }

  & .remove-main{
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width:250px;
    height: 45px;
    border:2px solid #eee;

  }

}
</style>
