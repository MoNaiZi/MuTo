<template>
  <div id="app" class="g-container">
      <div class="g-view-container">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </div>
      <div class="g-footer-container">
        <CTabbar/>
      </div>
  </div>
</template>

<script>
  import CTabbar from "components/tabbar"
export default {
  name: 'App',
  components:{
    CTabbar,
  }
}
</script>
<style lang="scss">
  .header-left{
    font-size: 14px;
  }
</style>
