/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */

module.exports = util => {
  const {
    libObj: { midResJson, axios, mime, mockjs },
    toolObj,
  } = util
  return {
    osIp: `127.0.0.1`,
    port: 9000,
    testPort: 9005,
    replayPort: 9001,
    apiWeb: './apiWeb.json',
    guard: true,
    api: {
      '/api/user': {
        success: true,
        data: {
          name: `张三`,
          age: 18,
        },
      },
    },
  }
}
