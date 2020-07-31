<template>
    <div class="wrap">
        <i class="iconfont icon-search"></i>
        <input ref="input" class="input" v-model="input" :placeholder="placeholder"/>
        <i v-if="close" @click="empty" class="iconfont icon-close"></i>
    </div>
</template>

<script>
  import {debounce} from 'assets/js/util'
    export default {
      components: {},
      name: "search-index",
        data(){
          return{
            placeholder:"请输入写点什么",
            close:false,
            input:''
          }
        },
      watch:{
        input:debounce(function(){
            if(this.input){
              this.close = true
            }else{
              this.close = false
            }
            this.$emit("input",this.input)
        })
      },
      methods:{
        empty(){
          this.input = ''
          this.focus()
        },
        focus(){
           this.$refs.input.focus()
        }
      }
    }
</script>

<style lang="scss" scoped>
  .wrap{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 4px;
    margin-top:-15px;
    /*height: 33px;*/

    & .iconfont{
      position: absolute;
      color:#d3d3d3;
      font-size: 20px;
      z-index: 99;
    }

    & .icon-close{
      right: 10px;
    }

    & .input{
      z-index: -1;
      position: absolute;
      height: 33px;
      width:100%;
      left: -4px;
      top:-2px;
      padding-left: 28px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 25px;
    }

  }
</style>
