<template>
<div class="wrap">
    <div class="loading" v-if="switchloading">
      <loading class="loading-mian"></loading>
    </div>
    <ul class="main-item" v-for="(section,index) in content" :key="index">
      <h1>{{section.name}}</h1>
      <div class="item">
        <li v-for="(item,i) in section.itemList" :key="i">
          <a :href="item.linkUrl">
            <p class="item-img"><img @load="updatascroll" v-lazy="item.picUrl"></p>
            <p class="item-name"><span>{{item.name}}</span></p>
          </a>
        </li>
      </div>
    </ul>
</div>
</template>

<script>
  import {getCategory} from 'api/category'
  import {displaybar,CATEGORY_CONTENT_KEY,CATEGORY_CONTENT_UPDATE_TIME_INIERVAL} from "./config"
  import loading from 'base/loading'
  import storage from 'assets/js/storage'

    export default {
        name: "displaybar",
        components:{
          loading
        },
        data(){
          return{
            // datalist:[],
            content:{},
            switchloading:false
          }
        },
        watch:{
          curId(id){
            this.switchloading = true
            this.getdata(id).then(()=>{
              this.switchloading = false
            })

          }
        },
      methods:{
          getdata(id){
            let contents = storage.get(CATEGORY_CONTENT_KEY);
            let updateTime;
            const curTime = new Date().getTime()
            console.log(curTime)

            if(contents && contents[id]){ //获取的本地缓存要有缓存，并且符合对应的缓存
              updateTime = contents[id].updateTime || 0;
              if(curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INIERVAL){ //时间等小于等于就从本地获取数据
                return this.getContentByLocalStorage(contents[id]);
              }else{ //HTTP
                return this.getContentByHTTP(id).then(() => {
                  this.updateLocalStorage(contents,id,curTime)
                })
              }
            }
            else{ //HTTP
              return this.getContentByHTTP(id).then(() =>{
                this.updateLocalStorage(contents,id,curTime);
              })
            }
          },
        getContentByLocalStorage(content){
          this.content = content.data;
          return Promise.resolve();
        },
        getContentByHTTP(id){
          return getCategory(id).then(data =>{
            return new Promise(resolve =>{
              if(data){
                this.content = data;
                resolve();
              }
            })
          })
        },
        updateLocalStorage(contents,id,curTime){
          console.log(contents)
            contents = contents || {};
            console.log(contents)
            contents[id] = {};
          console.log(contents)
            contents[id].data = this.content
            contents[id].updateTime= curTime;
            storage.set(CATEGORY_CONTENT_KEY,contents);
        },
        updatascroll(){
          this.$emit("displayber")
        }
      },
      props:{
        curId:{
          type:String,
          default: ''
        }
      },

    }
</script>

<style lang="scss" scoped>
  .main-item{
    width:95%;
    margin:0 auto;
    margin-top:40px;
    background: #fff;

    & h1{
      font-size: 16px;
      font-weight: 1000;
      position: relative;
      top:-25px;
    }
  }
  .item{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    /*padding-left: 2px;*/


    & li{
      /*margin-right: 25px;*/
    }
    &-img{
      width:80px;
      height: 80px;
    }
    & a{
      display: block;
      text-align: center;
    }
    & img{
      width: 100%;
      height: 100%;
    }
    &-name{
      margin-top:6px;
      padding-bottom: 10px;
      font-size: 14px;
    }

  }

  //加载中
    .loading{
      position: absolute;
      top:0;
      left: 0;
      right:0;
      bottom:0;

      &-mian{
        position: relative;
        top:200px;
        height: 80px;
        width:136px;
        text-align:center;
        padding-top:30px;
        background: #adb3ad;
        border-radius: 10%;
        color:#fff;
      }
    }
</style>
