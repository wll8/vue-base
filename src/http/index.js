import axios from 'axios'
import util from '@/util/index.js'

// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 等认证信息
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const data = response.data
    if (util.isType(data, `blob`)) {
      return response
    }
    else if (data.data === undefined) {
      return data
    }
    else {
      return response.data.data
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 封装 GET 请求
function get(url, params = {}, config = {}) {
  return instance.get(url, { params, ...config })
}

// 封装 POST 请求
function post(url, data = {}, config = {}) {
  return instance.post(url, data, config)
}

// 封装 PUT 请求
function put(url, data = {}, config = {}) {
  return instance.put(url, data, config)
}

// 封装 DELETE 请求
function del(url, config = {}) {
  return instance.delete(url, config)
}

// 导出封装的方法
export default {
  get,
  post,
  put,
  delete: del,
  axios: instance,
}

// 导出工具函数
export { util }
