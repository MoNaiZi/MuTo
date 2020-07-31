<template>
<div class="personal_home">
  <home class="home">
      <div slot="left" class="title">我的慕淘</div>
      <div slot="center" class="iconfont icon-setting center"></div>
      <div slot="right" class="iconfont icon-msg right"></div>
  </home>
  <div class="mian">
    <div class="wrap">
      <div class="header-img">
        <input type="file" @change="Upimg"/>
        <img id="user-img" :src="userimg">
      </div>
      <div class="header-login">
        <p>登录</p>
        <p>|</p>
        <p>注册</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import home from 'components/header'
  import defuser from './1.jpg'
    export default {
        name: "personal_home",
        components:{
          home
        },
        data(){
          return{
            userimg:defuser
          }
        },
      methods:{
          Upimg(e){
            const file = e.target.files[0]
            let reader = new FileReader(); //新建一个用于读写的对象
            let that = this
            reader.readAsDataURL(file) //异步读取文件内容
            reader.onload = function(e){//onload事件当读取事件成功时执行
              that.userimg = e.target.result;
            }

          }
    }
    }
</script>

<style lang="scss" scoped>
.home{
  background: red;
  box-shadow:0px 1px 5px #333333;
  justify-content: center;

  /deep/ .mine-navbar-center{
    flex:0;
  }
  .title{
    margin-left: 70px;
    font-size:18px;
  }
  .center,
  .right{
    position: relative;
    left: 100px;
 }
}

.mian{
  height: 150px;
  margin-top:50px;
  background: rgb(239,44,28);
  color:#fff;
  font-size: 18px;
  display:flex;
  align-items:center;
  justify-content: center;
  .wrap{
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  .header-login{
    display: flex;

    p{
      padding-left: 24px;
    }
  }
  .header-img{
    width:60px;
    height: 60px;
    border-radius: 50px;
    position: relative;
    top:-10px;
    left: 10px;
    overflow: hidden;

    img{
      height: 100%;
      width:100%;
    }

    input{
      height: 100%;
      width:100%;
      position: absolute;
      z-index: 999;
      opacity: 0;
    }
  }
}
</style>
