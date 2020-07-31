<template>
  <div class="search-mian">
    <div class="search-wrap">
        <div class="left iconfont icon-back" @click="back"></div>
        <search class="search"></search>
    </div>
    <hotsearch></hotsearch>
    <histoyr></histoyr>
  </div>
</template>

<script>
    import search from 'base/search'
    import hotsearch from './hot-search'
    import histoyr from './history-search'
    export default {
        name: "search-index",
        components:{
          search,
          hotsearch,
          histoyr
        },
        methods:{
          back(){
            console.log(this.$router.go)
            this.$router.go(-1)
          }
        }
    }
</script>

<style lang="scss" scoped>
.search-wrap{
  display: flex;
  width:100%;
  height: 50px;
  background: #fff;
  border-bottom:1px solid #eee;

  & .left{
    margin:9px 9px;
    font-size: 30px;
    color:#eee;
  }

  & .search{
    width:100%;
    height: 0px;
    z-index: 0;
    margin-top:9px;

    /deep/ .input{
      background: #eee;
      z-index:2;
    }
  }
}

</style>
