<template>
<div v-show="backtop_switch" @click="ToTop" class="backtop-main" name="mine-backtop" >
  <a href="javascript:" class="mine-backtop">
    <i class="iconfont icon-backtop"></i>
  </a>
</div>
</template>

<script>
    export default {
        name: "backtop",
        props:{
          backtop_switch:{
            type:Boolean,
            default:false
          }
        },
        methods:{
          ToTop(){``
            this.$emit('backtop')
          }
        }
    }
</script>

<style lang="scss" scoped>
  .backtop-main{
    position: absolute;
    top:80%;
    z-index:12;
    right: 10px;
  }
  .mine-backtop{
    width:40px;
    height: 40px;
    border: 1px solid;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    background: #5d656b;
    opacity: 0.6;
    display: flex;
    flex-direction: column-reverse;
  }
  .iconfont{
    font-size: 30px;
    color: #fff;
  }
</style>
