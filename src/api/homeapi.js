import axios from 'axios'
import jsonp from '../assets/js/jsonp'

//打乱数组顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while(i--){
    if(i !== (rndNum = Math.floor(Math.random() * arrLength))){
      [arr[i],arr[rndNum]] = [arr[rndNum] ,arr[i]]
    }
  }

  return arr;
}

//获取幻灯片数据--ajax
export const getHomeSlider = () =>{
  return axios.get('http://www.imooc.com/api/home/slider',{timeout:10000}).then(res => {
    if (res.data.code === 0){
      let sliders = res.data.slider
      // console.log(sliders)
      const slider = [sliders[Math.floor(Math.random()*sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      // console.log(sliders)
      if(sliders.length == 0){
        sliders = slider
      }
      return sliders
    }
  }).catch(err =>{
    if(err){
      console.log(err)
      return [
        {
          linkUrl:'https:www.baidu.com',
          picUrl: require('assets/img/404.png')
        }
      ]
    }
  }).then(res=>{
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(res)
      },2000)
    })
  })

}

//获取热卖推荐数据
export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url,params,{param:'callback', timeout:10000}).then(res => {
    if(res.code === '200'){
      return res
    }
      throw new Error('热卖数据没有获取到')
  }).catch(err => {
    if(err){
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
        resolve(res);
    })
  })
}


