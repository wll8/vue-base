<script setup>
import { ref } from 'vue'
import http from '@/http'

const apiData = ref(null)

async function handleTest() {
  try {
    const res = await http.get('/test')
    apiData.value = res
  }
  catch (error) {
    apiData.value = { error: error.message }
  }
}
</script>

<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/logo.png" alt="Vue logo" class="logo">
      <h1>欢迎使用 Vue3 基础框架</h1>
    </div>

    <div class="content">
      <div class="features">
        <div class="feature-item">
          <h3>📦 开箱即用</h3>
          <p>集成了 Vue3、Vue Router、Pinia、Axios 等常用库</p>
        </div>
        <div class="feature-item">
          <h3>🎨 样式支持</h3>
          <p>内置 Less 预处理器,支持全局变量和样式</p>
        </div>
        <div class="feature-item">
          <h3>🔧 代码规范</h3>
          <p>使用 @antfu/eslint-config 保证代码质量</p>
        </div>
        <div class="feature-item">
          <h3>🚀 Mock 工具</h3>
          <p>集成 mockm 用于接口联调和开发</p>
        </div>
      </div>

      <div class="actions">
        <button @click="handleTest">
          测试 HTTP 请求
        </button>
        <router-link to="/about" class="link-btn">
          关于页面
        </router-link>
      </div>

      <div v-if="apiData" class="result">
        <h3>API 响应:</h3>
        <pre>{{ apiData }}</pre>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  text-align: center;
  padding: 40px 0;
  color: white;

  .logo {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 2.5em;
    margin: 0;
  }
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.feature-item {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5em;
    margin: 0 0 10px 0;
    color: #667eea;
  }

  p {
    margin: 0;
    color: #666;
    line-height: 1.6;
  }
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  button, .link-btn {
    padding: 12px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
  }

  button {
    background: #42b983;
    color: white;

    &:hover {
      background: #33a373;
      transform: translateY(-2px);
    }
  }

  .link-btn {
    background: white;
    color: #667eea;

    &:hover {
      background: #f0f0f0;
      transform: translateY(-2px);
    }
  }
}

.result {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    margin-top: 0;
    color: #667eea;
  }

  pre {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
}
</style>
