import axios from 'axios'
import config from '@/config.js'

// 创建axios实例
const service = axios.create({
  timeout: 10000 // 请求超时
})

// request拦截器
service.interceptors.request.use(options => {
  options.baseURL = config.baseApi
  return options
}, error => {
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  return response.data.data
}, error => {
  return Promise.reject(error)
})

export default service
