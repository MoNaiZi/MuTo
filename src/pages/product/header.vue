<template>
    <div class="header-wrap">
          <cheader class="header-main">
            <div slot="left">
              <li class="iconfont icon-back" @click="back"></li>
            </div>
            <div slot="center">商品详情</div>
            <div slot="right">
              <li class="iconfont icon-msg"></li>
            </div>
          </cheader>
    </div>
</template>

<script>
  import cheader from 'components/header'
    export default {
        name: "product-header",
        components:{
          cheader
        },
        methods:{
          back(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style lang="scss" scoped>
.header-main{
  display: flex;
  align-items:center;
  justify-content:space-between;
  text-align: center;
  height: 55px;
  font-size: 21px;
  color: #fff;
  background: red;
  padding:0 10px;
}
</style>
