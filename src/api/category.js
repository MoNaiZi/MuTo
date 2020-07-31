import axios from 'axios'

const CancelToken = axios.CancelToken;
let cancel;

export const getCategory = (id =>{
  cancel && cancel('取消了前一次请求')
  cancel = null;
  return axios.get('http://www.imooc.com/api/category/content/'+(id),{

    cancelToken:new CancelToken(function executor(c){
      cancel = c;
    })
  }).then(res=>{
    console.log(res)
    return res.data.content.data
  })
})
