<template>
    <ul  class="nav-main">
      <li v-for="(item,index) in navdata" :key="index">
        <a :href="item.linkurl">
          <img :src="item.imgurl"/>
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
</template>

<script>
  import {navdata} from './config.js'
    export default {
        name: "home-nav",
        data(){
            return{
              navdata
            }
        }
    }
</script>

<style lang="scss" scoped>
  .nav-main{
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    background:#ffffff;
    margin-top:10px;
    padding-bottom: 24px;

    & img{
      height: 50px;
    }

    & a{
      display: flex;
      flex-direction:column;
      align-items: center;

    }

    & span{
      margin-top:5px;
    }

    & li{
     height: 55px;
      margin-top: 20px;
      margin-left: 21px;
    }
  }



</style>
