<template>
    <div class="mine-loading">
        <span class="mine-loading-indicator">
          <slot><img src="./loading.gif"/></slot>
        </span>
        <span class="mine-loading-text" v-if="loadingText">{{loadingText}}</span>
    </div>
</template>

<script>
    export default {
        name: "loading",
        props:{
          indicator:{
            type:String,
            default:'on',
            validate(value){
              return ['on','off'].indexOf(value) > -1;
            }
          },
          text:{
            type:String,
            default:"加载中"
          }
        },
      data(){
          return{
            loadingText:this.text
          }
      },
      watch:{
          text(text){
            this.loadingText=text
          }
      },
      methods:{
          setText(text){
            this.loadingText = text
          }
      }
      }

</script>

<style lang="scss" scoped>
  .mine-loading{
    width: 100px;
    margin:100px auto;
  }
</style>
