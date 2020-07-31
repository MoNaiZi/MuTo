<template>
    <div class="carindex">
      <div class="carindex-main">
        <cart_header  :bobyid="id"/>
        <cart_baby @commodity="commodity" @allbaby="allbaby"></cart_baby>
      </div>
      <cart_tab :allitem="item"/>
    </div>
</template>

<script>
  import cart_header from './cartheader'
  import cart_baby from './baby'
  import cart_tab from './cart_tab'
    export default {
        name: "cart_index",
        components:{
          cart_header,
          cart_baby,
          cart_tab,
        },
      data(){
          return{
            id:'',
            item:[]
          }
      },
      methods:{
        commodity(id){
          this.id = id;
        },
        allbaby(item){
          let arr = Array.prototype.slice.call(item);
          this.item = arr
        }
      },
      mounted(){
          // console.log(this.item)
      }
    }
</script>

<style lang="scss" scoped>

  .carindex{
    width:100%;
    height: 100%;
    @import "input";

    & .carindex-main{
      width:100%;
      height: 100%;
      padding-bottom:90px;
    }


    /*//处理默认复选框*/
    /*/deep/ input[type='checkbox']{*/
      /*cursor:pointer;*/
      /*position: relative;*/
      /*width:1rem;*/
      /*height: 1rem;*/
      /*font-size: 0.9rem;*/
      /*visibility: hidden;*/
    /*}*/
    /*//替代默认复选框，复选框*/
    /*/deep/ input[type='checkbox']::after{*/
      /*position:absolute;*/
      /*top:0;*/
      /*border: 1px solid;*/
      /*color:#c8c7c6;*/
      /*width:1rem;*/
      /*height: 1rem;*/
      /*display: inline-block;*/
      /*visibility: visible;*/
      /*padding-left: 0px;*/
      /*text-align:center;*/
      /*content: '';*/
      /*border-radius: 50%;*/
    /*}*/
    /*//复选框选中*/
    /*/deep/ input[type='checkbox']:checked::after{*/
      /*content:'✔';*/
      /*background-color:#fffdfb;*/
      /*font-size:0.9rem;*/
      /*color:#ff7d00;*/
    /*}*/
  }

</style>
