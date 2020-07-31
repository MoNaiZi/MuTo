<template>
    <div class="personal_index">
      <home/>
      <order/>
      <assets/>
      <personal_setting/>
    </div>
</template>

<script>
    import home from './personal_home'
    import order from './order'
    import assets from './assets'
    import personal_setting from './personal_setting'
    export default {
        name: "index",
        components:{
          home,
          order,
          assets,
          personal_setting
        }
    }
</script>

<style scoped>

</style>
