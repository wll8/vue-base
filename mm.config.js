/**
 * 文档: https://www.hongqiye.com/doc/mockm
 */

module.exports = () => {
  return {
    osIp: `127.0.0.1`,
    port: 9000,
    testPort: 9005,
    replayPort: 9001,
    apiWeb: "./apiWeb.json",
    guard: true,
    // proxy: `https://example.com/`, // 替换为后端的接口地址, 如果没有可不填
    api: {
      "/api/user": {
        success: true,
        data: {
          name: `张三`,
          age: 18,
        },
      },
    },
  };
};
