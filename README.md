# vue-base

为了便于初始化项目,维护了一个基于 vue3 的基础框架,目前有以下特性:

- [Vue 3](https://cn.vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://cn.vitejs.dev/) - 下一代前端构建工具
- [Vue Router](https://router.vuejs.org/zh/) - 官方路由管理器
- [Pinia](https://pinia.vuejs.org/zh/) - 新一代状态管理工具
- [Axios](https://axios-http.com/zh/) - 基于 Promise 的 HTTP 客户端封装
- [Less](http://lesscss.org/) - CSS 预处理器及全局变量
- [@antfu/eslint-config](https://github.com/antfu/eslint-config) - 代码风格校验
- [mockm](https://github.com/wll8/mockm) - 接口联调工具

## 项目结构

```
vue-base/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 资源文件(图片、样式等)
│   │   └── css/        # 全局样式和 Less 变量
│   ├── components/     # 公共组件
│   ├── http/           # HTTP 请求封装
│   ├── router/         # 路由配置
│   ├── store/          # Pinia 状态管理
│   ├── util/           # 工具函数
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── mm/                  # Mock 数据配置
├── index.html          # 入口 HTML 文件 (Vite 必需)
├── vite.config.js      # Vite 配置
├── eslint.config.js    # ESLint 配置
└── package.json

```

## 快速开始

### 克隆项目
```sh
git clone --depth=1 https://github.com/wll8/vue-base
cd vue-base
```

### 安装依赖
```sh
npm install
```

### 运行开发服务
```sh
npm run dev          # 启动开发服务器 + Mock 服务
npm run serve        # 仅启动开发服务器
```

访问 http://localhost:3000

### 构建发布
```sh
npm run build        # 生产环境构建
npm run build:test   # 测试环境构建
npm run preview      # 预览构建产物
```

### 代码检查
```sh
npm run lint         # 运行 ESLint 并自动修复
```

## 功能特性

### 1. HTTP 请求封装

已封装好的 Axios 实例,支持:
- 请求/响应拦截器
- 统一错误处理
- 便捷的请求方法(get/post/put/delete)

```javascript
import http from '@/http'

// GET 请求
const data = await http.get('/api/users', { id: 1 })

// POST 请求
const result = await http.post('/api/users', { name: 'test' })
```

### 2. 路由管理

使用 Vue Router 4,支持:
- 路由懒加载
- 路由守卫
- 嵌套路由

### 3. 状态管理

使用 Pinia,提供:
- 简洁的 API
- TypeScript 友好
- 模块化设计

### 4. 样式方案

- Less 预处理器
- 全局变量支持
- 自动注入全局样式
- 自定义滚动条样式

### 5. Mock 数据

使用 mockm 进行接口模拟:
- 支持 MockJS 语法
- 热更新
- 接口管理

在 `mm/api/index.js` 中配置 Mock 接口

## 开发规范

- 使用 @antfu/eslint-config 保证代码质量
- 支持 Vue 3 Composition API
- 推荐使用 `<script setup>` 语法

## 环境要求

- Node.js >= 16
- npm >= 7

## 常见问题

### 端口被占用

修改 `vite.config.js` 中的 `server.port` 配置

### 代理配置

在 `vite.config.js` 中的 `server.proxy` 配置代理规则

## License

MIT
