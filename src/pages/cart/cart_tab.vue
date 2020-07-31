<template>
  <form class="form">
    <ul class="tab-main">
        <div class="tab-main-left">
          <input type="checkbox" name="all" @change="all"/>
          <p>全选</p>
        </div>
        <div class="tab-main-right">
          <p>合计:<span class="total">￥0</span></p>
          <p>结算</p>
        </div>
    </ul>
  </form>
</template>

<script>
  import storage from 'assets/js/storage.js'
    export default {
        name: "cart_tab",
        props:{
          allitem:{
              type:Array,
              default:[]
            }
        },
        methods:{
          all(e){
            let all = document.getElementsByName('all')[0]
            let data = storage.get("baby--data")
            let lenitem = this.allitem
            console.log(this.allitem.length)
            if(!e.target.checked){
              console.log('没选中')
              for(let i = 0; i < lenitem.length ; i++){
                lenitem[i].removeAttribute("checked", "checked")
              }
              all.removeAttribute("checked", "checked")
            }else{
              console.log('选中')
              for(let i = 0; i < lenitem.length ; i++){
                  lenitem[i].setAttribute("checked", "checked")
              }
              all.setAttribute("checked", "checked")
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  input{
    -webkit-appearance: button;
    -moz-appearance: button;
    height: 15px;
    width:15px;
    touch-action: none;
  }


.form{
  position: fixed;
  width:100%;
  bottom:44px;
  z-index: 1;
  & .tab-main{
    display: flex;
    justify-content:space-between;
    padding: 20px;
    background:#fff;
    border:1px solid #c7c7c7;

    & div{
      display: flex;
      align-items:center;

     & .total{
       color:red;
     }

      & p{
        margin:0 5px;
      }
    }
  }
 .tab-main-right p:last-child{
    font-size: 15px;
    color:#fff;
    border-radius: 25px;
    padding: 14px 30px;
    background: rgb(255, 108, 8);
  }
}
</style>
