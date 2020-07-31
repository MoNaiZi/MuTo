import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'

//事件总线，用于非父子关系组件传递数据
Vue.prototype.bus = new Vue()

Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload,{
  preload:1,          //显示几张加载
  rror:require('assets/img/error.png'),     //失败的图片
  loading:require('assets/img/loading.gif'),  //成功的图片
  attempt:1          //尝试加载几次
})


fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
