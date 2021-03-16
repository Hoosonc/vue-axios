import axios from "axios";


export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 配置拦截器
  instance.interceptors.request.use(config => {

    // 假如
    // 1.config中的一些信息不符合要求
    // 2.每次发送网络请求时，都希望界面中显示一个请求的图标
    // 3.某些网络请求（比如登录（token），必须携带一些特殊信息）
    console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  },err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}






// 1.创建axios实例
// export function request(config) {
//   return new Promise(((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config).then(res => {
//       console.log(res);
//       resolve(res)
//     }).catch(err => {
//       console.log(err);
//       reject(err)
//     })
//   }))
// }


