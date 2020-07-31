<template>
<div class="comment-wrap">
  <div class="comment-top">
    <p>宝贝评价(2019)</p>
    <p class="comment-top-right">查看全部<span class="iconfont icon-back"></span></p>
  </div>
  <div class="comment-middle">
    <ul class="comment-middle-ul">
      <li>味道好闻(4)</li>
      <li>味道是正品(777)</li>
      <li>好香(4)</li>
      <li>厉害厉害(4)</li>
      <li>很棒(4)</li>
    </ul>
  </div>
  <div class="comment-bottom">
    <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
    <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
    <p>真好用>真好用>真好用>真好用>真好用>真好用>真好用>真好用</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "product-comment"
    }
</script>

<style lang="scss" scoped>
  .comment-wrap{
    padding: 0 10px;
    background: #fff;
    margin-top:10px;
  }

  .comment-top{
    display: flex;
    align-items:center;
    justify-content: space-between;
    height: 40px;
    font-size: 15px;

    &-right{
      color: red;
    }

    & .iconfont{
      display: inline-block;
      transform: rotateY(180deg);
      font-size:17px;
      margin-left: 15px;
    }
  }

  .comment-middle-ul:after{
    content: '';
    width:100px;
  }
  .comment-middle-ul{
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    font-size: 15px;

    & li{
      background:rgb(254, 236, 234);
      padding: 10px 10px;
      border-radius: 25px;
      margin-top:10px;
    }
  }

  .comment-bottom{
    margin-top:10px;
    height: auto;
    padding-left: 10px;
    padding-bottom: 10px;

    & p{
       margin-top:20px;
    }
  }
</style>
