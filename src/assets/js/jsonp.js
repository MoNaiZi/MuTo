import jsonp from 'jsonp'


export default(url,params,options) =>{
  console.log(options)
  url += (url.indexOf('?') < 0 ? '?' : '?')+parseParam(params);
  console.log(url)

  return new Promise((resolve,reject) =>{
    jsonp(url,options,(err,data) =>{
      if(resolve){
        resolve(data)
      }else if(reject){
        reject(err)
      }

    })
  })
}

//用于链接url
const parseParam = param =>{
  let params = []
  for (const key in param){
    // console.log(params) //[]
    // console.log(param)  //{page:1,pisze:20}
    params.push([key,param[key]]) //[["page",1],["pisze",20]]
  }
  return params.map(value => value.join('=')).join('&')  //page=1&pisze=20
}



