import config from '@/config.js'
import util from '@/util/index.js'
import * as autoApi from './autoApi.js'

class CustomApi extends autoApi.Api {
  custom = {
    /**
     * 这是一个自定义 API 测试用例
     * @param {*} param0 参数
     * @param {*} param0.beginDate 开始时间
     * @param {*} param0.endDate 结束时间
     */
    testApi({ beginDate, endDate }) {
      return api.instance.get(`/api/user`, {
        params: {
          beginDate,
          endDate,
        },
      })
    },
  }
}

const api = new CustomApi({
  axiosConfig: {
    timeout: 10000, // 请求超时
    baseURL: config.baseApi,
  },
})

// request拦截器
api.instance.interceptors.request.use(
  (options) => {
    options.baseURL = config.baseApi
    return options
  },
  (error) => {
    Promise.reject(error)
  }
)
// response拦截器
api.instance.interceptors.response.use(
  (response) => {
    const data = response.data
    if (util.isType(data, `blob`)) {
      return response
    } else if (data.data === undefined) {
      return data
    } else {
      return response.data.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

const install = (Vue) => {
  Vue.prototype.$http = api
}

export { api }

export default {
  install,
}
