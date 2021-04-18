# vue-base
为了便于初始化项目, 维护了一个基于 vue@2.x 的基础框架, 目前有以下特性:

- [axios](https://github.com/axios/axios) http 请求封装
- [less](http://lesscss.org/) css 预处理器及全局变量
- [eslint](https://eslint.org/demo) 代码风格校验, 基于 [vue/essential](https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-2-x)
- [mockm](https://github.com/wll8/mockm) 接口联调工具

## 克隆项目
``` sh
git clone --depth=1 https://github.com/wll8/vue-base
```

## 安装依赖
```
npm install
```
### 运行开发服务
``` sh
# 启动前端服务
npm run serve

# 启动接口联调工具
npm run mm
```

### 发布代码
```
npm run build
```

### 查看代码风格校验结果
```
npm run lint
```

### 附
- [vue 配置文档](https://cli.vuejs.org/config/)
