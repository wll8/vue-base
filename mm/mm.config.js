/**
 * 配置说明请参考文档: 
 * https://hongqiye.com/doc/mockm/config/option.html
 */

const api = require(`./api/index.js`)
const {wrapApiData} = require(`./util.js`)

module.exports = util => {
  return {
    guard: false,
    port: 9000,
    testPort: 9005,
    replayPort: 9001,
    watch: [`./api/`],
    apiWeb: `./apiWeb.json`,
    proxy: {
      '/': `http://www.httpbin.org/`,
      '/anything/intercept': [`origin`, `127.0.0.1`],
    },
    api: {
      ...api(util),
      '/api/user': {
        success: true,
        data: {
          name: `张三`,
          age: 18,
        },
      },
    },
    static: [],
    resHandleReplay: ({req, res}) => wrapApiData({code: 200, data: {}}),
    resHandleJsonApi: ({req, res: {statusCode: code}, data}) => wrapApiData({code, data}),
  }
}