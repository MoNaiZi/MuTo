<template>
  <div class="baby-main">
    <form>
      <scroll class="swiper" switchscroll>
        <ul class="body-item" v-for="(item,index) in datalist" :key="index">
          <li class="body-shop">
            <input type="checkbox" name="body-item" @click="Select" :id="index" :value="item.extend.shopTitle">
            <p class="body-shop-name">{{item.extend.shopTitle}} ></p>
            <p class="body-shop-discount">领券</p>
          </li>
          <li class="body-name">
            <input type="checkbox" name="body-item" :id="index" :value="item.name.shortName"/>
            <p class="body-img"><img :src="item.baseinfo.picUrlNew"/></p>
            <div class="baby-commodity">
              <p class="baby-commodity-title">{{item.name.shortName}}</p>
              <!--<p class="baby-commodity-specs">规格</p>-->
              <p  class="baby-commodity-Price"><span class="price">￥</span>{{item.price.actPrice}}<span class="more"></span></p>
            </div>
          </li>
        </ul>
      </scroll>
    </form>
  </div>
</template>

<script>
  import scroll from 'base/roll'
  import storage from 'assets/js/storage.js'

  export default {
    name: "baby",
    components: {
      scroll
    },
    data() {
      return {
        datalist: {}
      }
    },
    watch: {},
    created() {
      const key = "baby--data";
      this.GetStorage(key)
      this.bus.$on('pr_addbaby', (data, id) => {
        this.SetStorage(data, id, key)
      })

    },
    mounted(){
      //用于全选
      const baby_item = document.getElementsByName('body-item')
      this.$emit('allbaby',baby_item)
    },
    methods: {
      SetStorage(data, id, key) {
        this.datalist[id] = data
        storage.set(key, this.datalist)
        this.GetStorage(key)
      },
      GetStorage(key) {
        const get = storage.get(key)
        if (!get) {
          this.datalist = {}
        } else {
          this.datalist = get
        }
      },

      //选中宝贝
      Select(e) {
        const baby_item = document.getElementsByName('body-item')
        const id = e.toElement.id
        /*点击那个复选框就获取那个复选框的id*/
        for (let i = 0; i < baby_item.length; i++) {
          if (id === baby_item[i].id) {
            if (!e.toElement.checked) {
              baby_item[i].removeAttribute("checked")
            } else {
              console.log('选中状态')
              this.$emit('commodity',id)
              baby_item[i].setAttribute("checked", "checked")
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  input {
    -webkit-appearance: button;
    -moz-appearance: button;
    height: 20px;
    width: 20px;
  }


  form {
    height: 100%;
  }

  .baby-main {
    height: 100%;
    padding-bottom: 32px;

    .swiper {
      height: 100%;

      .swiper-slide {
        width: 414px;
        height: auto;
      }
    }
  }

  .body-item {
    width: 95%;
    height: 180px;
    margin: 0 auto;
    border-radius: 13px;
    background: #fff;
    padding: 15px 10px;
    margin-top: 10px;

    & .body-shop {
      display: flex;
      font-size: 17px;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      & .body-shop-name {
        width: 180px;
        margin-right: 124px;
      }
    }

    & .body-name {
      display: flex;
      align-items: center;
      margin-top: 25px;

      & .body-img {
        width: 80px;
        height: 80px;
        margin: 0 14px;

        & img {
          width: 100%;
          height: 100%;
        }
      }

      & .baby-commodity {
        word-break: break-all; //自动换行
        padding-right: 10px;
        width: 248px;
        margin-top: -23px;
        font-size: 15px;
        p{
          margin-top:15px;
        }
        &-title{

        }
        &-specs{
          width:40px;
          color:#fff;
          background: #d1c3c3;
          padding: 5px;
        }
        &-Price{
          font-size: 20px;
          color:red;

          .price{
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
