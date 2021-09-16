/**
 * 类型定义
 * @typedef {import('mockm/@types/config').Config} Config
 * @typedef {import('mockm/@types/config').Api} Api
 */

const { dateFormat, wrapApiData } = require(`../util.js`)

/** @type Config */
module.exports = (util) => {
  const {
    libObj: { mockjs },
    toolObj,
  } = util
  const api = {
    // 覆盖已存在的接口
    /** @type Api */
    cover: {},
    // 模拟不存在的接口
    /** @type Api */
    nonExistent: {
      // 创建接口并使用 mockjs 生成数据
      'get /api/test': wrapApiData(
        mockjs.mock({
          'data|3-7': [
            {
              userId: `@id`,
              userName: `@cname`,
            },
          ],
        })
      ),
    },
  }
  return {
    api: {
      // ...api.cover,
      ...api.nonExistent,
    },
  }
}
