<template>
  <Home_header class="header" v-if="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center"><search @click.native="tosearch" @input="receive"></search></div>
    <i class="iconfont icon-msg" slot="right"></i>
  </Home_header>
</template>

<script>
  import Home_header from "components/header"
  import search from "base/search"

    export default {
        name: "home_header",
        components:{
          Home_header,
          search
        },
      data(){
        return{
          visible:true
        }
      },
      methods:{
          show(){
            this.visible = true
          },
          hide(){
            this.visible = false
          },
        receive(input){
            console.log(input)
        },
        tosearch(){
          console.log(this.$router)
          this.$router.push('/search')
        }
      }
    }

</script>

<style lang="scss">

.iconfont{
  font-size: 30px;
}

</style>
