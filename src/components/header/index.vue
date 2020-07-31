<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
    <slot name="left"></slot>
  </div>
  <div class="mine-navbar-center" v-if="$slots.center">
    <slot name="center"></slot>
  </div>
  <div class="mine-navbar-right" v-if="$slots.right">
    <slot name="right"></slot>
  </div>
  </div>
</template>

<script>
    export default {
        name: "heade"
    }
</script>

<style lang="scss" scoped>
.mine-navbar{
  position: absolute;
  top:0px;
  z-index: 2;
  color:#fff;
  width:100%;
  height: 50px;
  display: flex;
  align-items:center;

  &-center{
    flex: 1;
    margin:0 10px;
  }

  &-right{
    margin-right: 10px;
  }
  &-left{
    margin-left: 10px;
  }
}


</style>
